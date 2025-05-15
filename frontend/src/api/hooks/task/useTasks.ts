import TaskModel from "@/api/models/TaskModel";
import { useEffect, useState } from "react";
import cmsApiBaseUrl from "../../../constants/cmsApiBaseUrl";
import createTaskEndpoint from "../../endpoints/createTasksEndpoint";
import fetchFromEndpoint from "../../fetchFromEndpoint";
import { DateTime } from "luxon";

export default function useTasks() {
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const endpoint = createTaskEndpoint(cmsApiBaseUrl);
        const data = await fetchFromEndpoint(
          endpoint,
          {
            path: "/tasks",
            title: "",
            description: "",
            is_completed: false,
            created_at: DateTime.now(),
            lastUpdate: DateTime.now(),
          },
          "GET"
        );
        setTasks(data as TaskModel[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, loading, error };
}
