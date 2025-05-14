import { useState } from "react";
import TaskModel from "../../models/TaskModel"; // adapte le chemin si nécessaire

const useTaskForm = (initialTask: TaskModel) => {
  const [title, setTitle] = useState(initialTask.title);
  const [description, setDescription] = useState(initialTask.description);
  const [isCompleted, setIsCompleted] = useState(initialTask.isCompleted);
  const [loading, setLoading] = useState(false);

  return {
    title,
    setTitle,
    description,
    setDescription,
    isCompleted,
    setIsCompleted,
    loading,
    setLoading,
  };
};

export default useTaskForm;
