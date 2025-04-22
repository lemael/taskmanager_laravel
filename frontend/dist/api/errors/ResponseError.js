class ResponseError extends Error {
    constructor(params) {
        super();
        // captureStackTrace is not always defined on mobile
        // https://sentry.tuerantuer.org/organizations/digitalfabrik/issues/263/
        // https://sentry.tuerantuer.org/organizations/digitalfabrik/issues/265/
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition,@typescript-eslint/strict-boolean-expressions
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ResponseError);
        }
        const { endpointName, response, url, requestOptions } = params;
        this._message = this.createMessage(params);
        this._endpointName = endpointName;
        this._response = response;
        this._url = url;
        this._requestOptions = requestOptions;
    }
    createMessage({ requestOptions, url, endpointName, response, }) {
        let stringifiedFormData = "";
        if (requestOptions.method === "POST" &&
            typeof requestOptions.body === "string") {
            stringifiedFormData = ` and the body ${requestOptions.body}`;
        }
        else if (requestOptions.method === "POST") {
            stringifiedFormData = ` and the formData ${JSON.stringify(requestOptions.body)}`;
        }
        return `ResponseError: Failed to ${requestOptions.method} the request for the ${endpointName} endpoint with the url
     ${url}${stringifiedFormData}. Received response status ${response.status}: ${response.statusText}.`;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        this._message = value;
    }
    get endpointName() {
        return this._endpointName;
    }
    get response() {
        return this._response;
    }
    get url() {
        return this._url;
    }
    get requestOptions() {
        return this._requestOptions;
    }
}
export default ResponseError;
