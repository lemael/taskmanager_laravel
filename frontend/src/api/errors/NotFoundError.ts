type NotFoundType = "task" | "route";

const getMessage = (type: NotFoundType, id: string): string =>
  `The ${type} ${id} does not exist here.`;

class NotFoundError extends Error {
  _type: NotFoundType;
  _id: string | number;

  constructor(params: { id: string; type: NotFoundType }) {
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

  get type(): NotFoundType {
    return this._type;
  }

  get id(): string | number {
    return this._id;
  }
}

export default NotFoundError;
