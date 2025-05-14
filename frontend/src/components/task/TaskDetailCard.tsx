import styled from "styled-components";
import TaskModel from "../../api/models/TaskModel";

type Props = {
  task: TaskModel;
  onCancel: () => void;
  onEdit: () => void;
  //  onDelete: () => void;
};

const TaskDetailCard = ({ task, onCancel, onEdit }: Props) => {
  return (
    <div
      className="p-4 bg-white shadow rounded d-flex flex-column"
      style={{ minHeight: "500px" }}
    >
      {/* Contenu */}
      <div>
        <h2 className="mb-3">{task.title}</h2>
        <Description>{task.description}</Description>
        <p>
          <span className="fw-bold">Status:</span>{" "}
          {task.isCompleted ? "✅ Completed" : "❌ Incomplete"}
        </p>
      </div>

      {/* Footer des boutons */}
      <div className="mt-3 d-flex gap-2 mt-auto">
        <div className="d-flex flex-wrap gap-3">
          <button className="btn btn-primary" onClick={onCancel}>
            <i className="bi bi-arrow-left me-2"></i>
            Back
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "#ffa94d", color: "white" }}
            onClick={onEdit}
          >
            <i className="bi bi-pencil-square me-2"></i>
            Edit
          </button>
          <button className="btn btn-danger">
            <i className="bi bi-x-circle me-2"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const Description = styled.p`
  border: 1px solid black;
  height: 260px;
  padding: 1rem;
  borderradius: 4px;
`;
export default TaskDetailCard;
