import TaskModel from "../api/models/TaskModel";
import List from "./List";
import TaskItem from "./TaskItem";

type Props = {
  tasks: TaskModel[];
};

const TaskList: React.FC<Props> = ({ tasks }) => {
  const renderTaskItem = (task: TaskModel) => (
    <TaskItem key={task.path} task={task} />
  );

  return (
    <div style={styled.container}>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <List
          noItemsMessage="Keine Aufgaben verfügbar."
          items={tasks || []}
          renderItem={renderTaskItem}
        />
      )}
    </div>
  );
};

// Styles en JS (inline)
const styled: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
  },
};
export default TaskList;
