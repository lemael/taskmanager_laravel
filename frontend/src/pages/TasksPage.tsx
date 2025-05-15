import { ReactElement } from "react";
import useTasks from "../api/hooks/task/useTasks";
import BaseBackground from "../components/base";
import ContentLayout from "../components/ContentLayout";
import TaskList from "../components/task/TaskList";
type CityRouteProps = {
  pathname: string;
};

const TasksPage = ({ pathname }: CityRouteProps): ReactElement => {
  const { tasks, loading, error } = useTasks();
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
