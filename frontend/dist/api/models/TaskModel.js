import PageModel from "./PageModel";
class TaskModel extends PageModel {
    constructor(params) {
        const { path, title, description, is_completed, created_at, lastUpdate } = params;
        super({
            path,
            title,
            content: description || "",
            lastUpdate,
        });
        this._description = description || null;
        this._isCompleted = is_completed;
        this._createdAt = created_at;
    }
    get description() {
        return this._description;
    }
    get isCompleted() {
        return this._isCompleted;
    }
    get createdAt() {
        return this._createdAt;
    }
    isEqual(other) {
        return (super.isEqual(other) &&
            this._description === other._description &&
            this._isCompleted === other._isCompleted &&
            this._createdAt.equals(other._createdAt));
    }
}
export default TaskModel;
