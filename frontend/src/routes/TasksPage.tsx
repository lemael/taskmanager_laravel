import { DateTime } from "luxon";
import { ReactElement, useEffect, useState } from "react";
import createTaskEndpoint from "../api/endpoints/createTasksEndpoint";
import fetchFromEndpoint from "../api/fetchFromEndpoint";
import TaskModel from "../api/models/TaskModel";
import ContentLayout from "../components/ContentLayout";
import List from "../components/List";
import TaskItem from "../components/TaskItem";
import cmsApiBaseUrl from "../constants/cmsApiBaseUrl";

type CityRouteProps = {
  pathname: string;
};

const TasksPage = ({ pathname }: CityRouteProps): ReactElement => {
  const [tasks, setTasks] = useState<TaskModel[] | null>(null);
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

  const renderTaskItem = (task: TaskModel) => (
    <TaskItem key={task.path} task={task} />
  );

  return (
    <ContentLayout isLoading={loading}>
      <h1>Aufgabenübersicht</h1>
      {error && <p>Fehler beim Laden: {error.message}</p>}
      <List
        noItemsMessage="Keine Aufgaben verfügbar."
        items={tasks || []}
        renderItem={renderTaskItem}
      />
    </ContentLayout>
  );
};

export default TasksPage;
