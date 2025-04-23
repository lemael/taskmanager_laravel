import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TasksPage from "./routes/TasksPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TasksPage pathname="/tasks" />} />
      </Routes>
    </Router>
  );
};

export default App;
