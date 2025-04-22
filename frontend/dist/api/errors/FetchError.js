class FetchError extends Error {
    constructor(params) {
        super();
        // captureStackTrace is not always defined on mobile
        // https://sentry.tuerantuer.org/organizations/digitalfabrik/issues/263/
        // https://sentry.tuerantuer.org/organizations/digitalfabrik/issues/265/
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition,@typescript-eslint/strict-boolean-expressions
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, FetchError);
        }
        this._message = this.createMessage(params);
        this._endpointName = params.endpointName;
        this._url = params.url;
        this._requestOptions = params.requestOptions;
        this._message = this.createMessage(params);
        this._innerError = params.innerError;
    }
    createMessage({ requestOptions, url, endpointName, innerError, }) {
        let stringifiedFormData = "";
        if (requestOptions.method === "POST" &&
            typeof requestOptions.body === "string") {
            stringifiedFormData = ` and the body ${requestOptions.body}`;
        }
        else if (requestOptions.method === "POST") {
            stringifiedFormData = ` and the formData ${JSON.stringify(requestOptions.body)}`;
        }
        return `FetchError: Failed to ${requestOptions.method} the request for the ${endpointName} endpoint with the url
     ${url}${stringifiedFormData}. ${innerError.message}`;
    }
    get message() {
        return this._message;
    }
    get endpointName() {
        return this._endpointName;
    }
    get innerError() {
        return this._innerError;
    }
    get url() {
        return this._url;
    }
    get requestOptions() {
        return this._requestOptions;
    }
}
export default FetchError;
