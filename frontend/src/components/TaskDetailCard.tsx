import TaskModel from "../api/models/TaskModel";

type Props = {
  task: TaskModel;
  onCancel: () => void;
};

const TaskDetailCard = ({ task, onCancel }: Props) => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.isCompleted ? "✅ Completed" : "❌ Incomplete"}</p>
      <div className="mt-3 d-flex gap-2">
        <div className="d-flex flex-wrap gap-3">
          {/* Retour (bleu) */}
          <button className="btn btn-primary" onClick={onCancel}>
            <i className="bi bi-arrow-left me-2"></i>
            Back
          </button>

          {/* Modifier (orange clair personnalisé) */}
          <button
            className="btn"
            style={{ backgroundColor: "#ffa94d", color: "white" }}
          >
            <i className="bi bi-pencil-square me-2"></i>
            Edit
          </button>

          {/* Annuler (rouge) */}
          <button className="btn btn-danger">
            <i className="bi bi-x-circle me-2"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailCard;
