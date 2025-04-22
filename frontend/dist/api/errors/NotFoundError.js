const getMessage = (type, id) => `The ${type} ${id} does not exist here.`;
class NotFoundError extends Error {
    constructor(params) {
        super(getMessage(params.type, params.id));
        // captureStackTrace is not always defined on mobile
        // https://sentry.tuerantuer.org/organizations/digitalfabrik/issues/263/
        // https://sentry.tuerantuer.org/organizations/digitalfabrik/issues/265/
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition,@typescript-eslint/strict-boolean-expressions
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotFoundError);
        }
        this.name = "NotFoundError";
        this._id = params.id;
        this._type = params.type;
    }
    get type() {
        return this._type;
    }
    get id() {
        return this._id;
    }
}
export default NotFoundError;
