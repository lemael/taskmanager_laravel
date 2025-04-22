var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchFromEndpoint = (endpoint_1, params_1, ...args_1) => __awaiter(void 0, [endpoint_1, params_1, ...args_1], void 0, function* (endpoint, params, method = "GET") {
    const url = endpoint.mapParamsToUrl(params);
    let response;
    if (method === "GET") {
        response = yield fetch(url);
    }
    else {
        const body = endpoint.mapParamsToBody
            ? endpoint.mapParamsToBody(params)
            : JSON.stringify(params);
        const headers = body instanceof FormData
            ? undefined
            : { "Content-Type": "application/json" };
        response = yield fetch(url, { method, body, headers });
    }
    if (!response.ok) {
        throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
    }
    const json = yield response.json();
    if (Array.isArray(json)) {
        return json.map((item) => endpoint.mapResponse(item, params));
    }
    return endpoint.mapResponse(json, params);
});
export default fetchFromEndpoint;
