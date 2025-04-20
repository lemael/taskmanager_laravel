// src/models/TaskModel.ts
import { DateTime } from "luxon";
import PageModel from "./PageModel";

class TaskModel extends PageModel {
  private _description: string | null;
  private _isCompleted: boolean;
  private _createdAt: DateTime;

  constructor(params: {
    path: string;
    title: string;
    description?: string;
    is_completed: boolean;
    created_at: DateTime;
    lastUpdate: DateTime;
  }) {
    const { path, title, description, is_completed, created_at, lastUpdate } =
      params;

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

  get description(): string | null {
    return this._description;
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  get createdAt(): DateTime {
    return this._createdAt;
  }

  isEqual(other: TaskModel): boolean {
    return (
      super.isEqual(other) &&
      this._description === other._description &&
      this._isCompleted === other._isCompleted &&
      this._createdAt.equals(other._createdAt)
    );
  }
}

export default TaskModel;
