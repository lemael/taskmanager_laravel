class Payload {
    constructor(isFetching, requestUrl = null, data = null, error = null, fetchDate = Date.now()) {
        this._isFetching = isFetching;
        this._fetchDate = fetchDate;
        this._error = error;
        this._requestUrl = requestUrl;
        this._data = data;
        if (error && data !== null) {
            throw new Error("data and error can not be set at the same time");
        }
    }
    get fetchDate() {
        return this._fetchDate;
    }
    get isFetching() {
        return this._isFetching;
    }
    get data() {
        return this._data;
    }
    get error() {
        return this._error;
    }
    get requestUrl() {
        return this._requestUrl;
    }
}
export default Payload;
