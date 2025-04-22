import { deepmerge } from "deepmerge-ts";
const defaultRequestOptions = {};
let jpalTrackingCode = null;
export const setJpalTrackingCode = (trackingCode) => {
    jpalTrackingCode = trackingCode;
};
export const getJpalTrackingCode = () => jpalTrackingCode;
export const setUserAgent = (userAgent) => {
    defaultRequestOptions.headers = Object.assign(Object.assign({}, defaultRequestOptions.headers), { "User-Agent": userAgent });
};
export const request = (url, options) => {
    // merge mutates the first passed object which may lead to errors e.g. by setting body on a GET request
    const requestOptions = {};
    const cleanOptions = Object.assign({}, deepmerge(requestOptions, options, defaultRequestOptions));
    delete cleanOptions.window;
    const finalOptions = cleanOptions;
    return fetch(url, finalOptions);
};
