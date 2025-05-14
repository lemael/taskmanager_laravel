import { useEffect, useState } from "react";
import cmsApiBaseUrl from "../constants/cmsApiBaseUrl";
import TaskModel from "./models/TaskModel";

export default function useTaskById(taskId: string) {
  const [task, setTask] = useState<TaskModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!taskId) return;

    const fetchTask = async () => {
      try {
        const res = await fetch(cmsApiBaseUrl + `/tasks`);

        if (!res.ok) {
          throw new Error("Error loading tasks");
        }

        const listTask: TaskModel[] = await res.json();
        console.log("listTask", listTask);
        const taskItem = listTask[Number(taskId) - 1];

        console.log("taskItem", taskItem);
        if (!taskItem) {
          throw new Error("Task not found");
        }

        const taskElement: TaskModel = taskItem;
        setTask(taskElement);
      } catch (err) {
        setError(err as Error);
        console.error("Error during fetch:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [taskId]);

  return { task, loading, error };
}
