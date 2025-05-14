import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTaskById from "../api/hooks/task/useTaskById";
import BaseBackground from "../components/base";
import TaskDetailCard from "../components/task/TaskDetailCard";
import TaskEdit from "../components/task/TaskEdit";
const TaskDetailPage = () => {
  const { taskId } = useParams<{ taskId: string }>();
  console.log("taskId reçu:", taskId);
  const navigate = useNavigate();
  const { task, loading } = useTaskById(taskId || "");
  const [isEditing, setIsEditing] = useState(false);
  console.log("task", task);
  if (loading) return <p>Loading...</p>;
  if (!task) return <p>Task not found</p>;

  return (
    <>
      <BaseBackground />
      <div style={styles.container1}>
        <div style={styles.container2}>
          {!isEditing ? (
            <TaskDetailCard
              task={task}
              onCancel={() => navigate("/")}
              onEdit={() => setIsEditing(true)}
              //onDelete={}
            />
          ) : (
            <TaskEdit
              task={task}
              onEdit={() => setIsEditing(false)} // 👈 revenir à l'affichage
            />
          )}
        </div>
      </div>
    </>
  );
};

//  Styles en JS (inline)
const styles: { [key: string]: React.CSSProperties } = {
  container1: {
    marginTop: "-150px",
    position: "relative",
    zIndex: 1,
    height: "100vh",
  },
  container2: {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "8px",
    margin: "0 auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
    width: "800px",
    height: "100%",
  },
};
export default TaskDetailPage;
