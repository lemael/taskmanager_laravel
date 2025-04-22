var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JPAL_TRACKING_CODE_QUERY_PARAM } from "../tracking";
import Payload from "./Payload";
import FetchError from "./errors/FetchError";
import NotFoundError from "./errors/NotFoundError";
import ResponseError from "./errors/ResponseError";
import { request as fetch, getJpalTrackingCode } from "./request";
/**
 * An Endpoint holds all the relevant information to fetch data from it
 */
class Endpoint {
    constructor(name, mapParamsToUrl, mapParamsToBody, mapResponse, responseOverride, errorOverride) {
        this.mapParamsToUrl = mapParamsToUrl;
        this.mapParamsToBody = mapParamsToBody;
        this.mapResponse = mapResponse;
        this.responseOverride = responseOverride;
        this.errorOverride = errorOverride;
        this._stateName = name;
    }
    get stateName() {
        return this._stateName;
    }
    request(params, overrideUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.errorOverride) {
                throw this.errorOverride;
            }
            const baseUrl = overrideUrl || this.mapParamsToUrl(params);
            const urlObject = new URL(baseUrl);
            const jpalTrackingCode = getJpalTrackingCode();
            if (jpalTrackingCode) {
                urlObject.searchParams.append(JPAL_TRACKING_CODE_QUERY_PARAM, jpalTrackingCode);
            }
            const url = urlObject.toString();
            if (this.responseOverride) {
                return new Payload(false, url, this.responseOverride, null);
            }
            const body = this.mapParamsToBody ? this.mapParamsToBody(params) : null;
            const headers = typeof body === "string"
                ? { headers: { "Content-Type": "application/json" } }
                : {};
            const requestOptions = body === null
                ? {
                    method: "GET",
                }
                : Object.assign({ method: "POST", body }, headers);
            const response = yield fetch(url, requestOptions).catch((e) => {
                throw new FetchError({
                    endpointName: this.stateName,
                    innerError: e,
                    url,
                    requestOptions,
                });
            });
            const NOT_FOUND_CODE = 404;
            if (response.status === NOT_FOUND_CODE) {
                throw new NotFoundError(Object.assign(Object.assign({}, params), { type: this.stateName === "task" ? "task" : "route", id: this.stateName }));
            }
            if (!response.ok) {
                throw new ResponseError({
                    endpointName: this.stateName,
                    response,
                    url,
                    requestOptions,
                });
            }
            const json = yield response.json().catch((e) => {
                throw new FetchError({
                    endpointName: this.stateName,
                    innerError: e,
                    url,
                    requestOptions,
                });
            });
            const fetchedData = this.mapResponse(json, params);
            return new Payload(false, url, fetchedData, null);
        });
    }
}
export default Endpoint;
