import { DateTime } from "luxon";
import React from "react";
import useTaskForm from "../../api/hooks/task/useTaskForm";
import useUpdateTaskWithStatus from "../../api/hooks/task/useUpdateTaskWithStatus";
import TaskModel from "../../api/models/TaskModel";

type Props = {
  task: TaskModel;
  onEdit: () => void;
};

const TaskEdit = ({ task, onEdit }: Props) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    isCompleted,
    setIsCompleted,
    setLoading,
  } = useTaskForm(task);

  const updateTask = useUpdateTaskWithStatus({
    onSuccess: () => {
      setLoading(false);
      onEdit(); // revenir à la vue détail
    },
    onError: () => {
      setLoading(false);
    },
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const updatedData = {
      path: task.path,
      title,
      description,
      is_completed: isCompleted,
      created_at: task.createdAt,
      lastUpdate: DateTime.now(),
    };

    await updateTask(task.path, updatedData);
  };
  return (
    <div>
      <h2>Edit task</h2>
      <form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            value={description || ""}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          <label className="form-check-label">Completed</label>
        </div>

        <button type="submit" className="btn btn-success me-2">
          Save
        </button>
        <button type="button" onClick={onEdit} className="btn btn-secondary">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default TaskEdit;
