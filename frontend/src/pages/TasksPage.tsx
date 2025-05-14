import { DateTime } from "luxon";
import { ReactElement, useEffect, useState } from "react";
import createTaskEndpoint from "../api/endpoints/createTasksEndpoint";
import fetchFromEndpoint from "../api/fetchFromEndpoint";
import TaskModel from "../api/models/TaskModel";
import BaseBackground from "../components/base";
import ContentLayout from "../components/ContentLayout";
import TaskList from "../components/TaskList";
import cmsApiBaseUrl from "../constants/cmsApiBaseUrl";

type CityRouteProps = {
  pathname: string;
};

const TasksPage = ({ pathname }: CityRouteProps): ReactElement => {
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

  if (loading) return <p>Loading tasks...</p>;
  return (
    <>
      <BaseBackground />
      <div style={styles.container}>
        <ContentLayout isLoading={loading}>
          {error && <p>Fehler beim Laden: {error.message}</p>}
          <TaskList tasks={tasks} />
        </ContentLayout>
      </div>
    </>
  );
};

//  Styles en JS (inline)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    marginTop: "-150px",
    position: "relative",
    zIndex: 1,
  },
};
export default TasksPage;
