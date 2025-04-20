import React from "react";
import TaskModel from "../api/models/TaskModel";

type Props = {
  task: TaskModel;
};

const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <div className="task-item" style={styles.container}>
      <h2 style={styles.title}>{task.title}</h2>
      <p style={styles.description}>{task.description}</p>
      <a href={task.path} style={styles.link}>
        Mehr erfahren
      </a>
    </div>
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
