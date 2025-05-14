import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TaskModel from "../../api/models/TaskModel";

type Props = {
  task: TaskModel;
  handleClick?: (task: TaskModel) => void;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  const cleanId = task.path.replace("/tasks/", "");
  const navigate = useNavigate();
  const handleClick = (task: TaskModel) => {
    console.log("Clicked task:", task.title);
    navigate(`/task/${cleanId}`);
  };

  return (
    <ClickableItem
      className="task-item"
      style={styles.container}
      onClick={() => handleClick(task)}
    >
      <h2 style={styles.title}>{task.title}</h2>
      <p style={styles.description}>{task.description}</p>
    </ClickableItem>
  );
};

export default TaskItem;

// Optional: inline styles (tu peux aussi utiliser Tailwind ou CSS modules si tu veux)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    backgroundColor: "#f9f9f9",
  },
  title: {
    margin: "0 0 8px 0",
  },
  description: {
    margin: "0 0 12px 0",
    color: "#555",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
};

const ClickableItem = styled.div`
  cursor: pointer;
  padding: 10px;
  border-radius: 6px;
  transition: background-color 0.2s, transform 0.2s;
  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.02);
  }
`;
