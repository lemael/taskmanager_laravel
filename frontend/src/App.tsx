import React from "react";
import { Route, Routes } from "react-router-dom";
import TaskDetailPage from "./pages/TaskDetailPage";
import TasksPage from "./pages/TasksPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksPage pathname="/tasks" />} />
      <Route path="/task/:taskId" element={<TaskDetailPage />} />
    </Routes>
  );
};

export default App;
