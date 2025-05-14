import { useNavigate, useParams } from "react-router-dom";
import useTaskById from "../api/useTaskById";
import TaskDetailCard from "../components/TaskDetailCard";
import BaseBackground from "../components/base";
const TaskDetailPage = () => {
  const { taskId } = useParams<{ taskId: string }>();
  console.log("taskId reçu:", taskId);
  const navigate = useNavigate();
  const { task, loading } = useTaskById(taskId || "");
  console.log("task", task);
  if (loading) return <p>Loading...</p>;
  if (!task) return <p>Task not found</p>;

  return (
    <>
      <BaseBackground />
      <div style={styles.container1}>
        <div style={styles.container2}>
          <TaskDetailCard task={task} onCancel={() => navigate("/")} />
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
  },
  container2: {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "8px",
    margin: "0 auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
    width: "800px",
    height: "800px",
  },
};
export default TaskDetailPage;
