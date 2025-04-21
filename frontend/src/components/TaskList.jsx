import { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <h2>🗂️ Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>{task.title}</strong> – {task.description}{" "}
              <span style={{ color: task.is_completed ? "green" : "orange" }}>
                [{task.is_completed ? "Completed" : "Pending"}]
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
