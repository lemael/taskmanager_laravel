import React, { ReactNode } from "react";

type Props = {
  isLoading: boolean;
  children?: ReactNode;
};

const ContentLayout: React.FC<Props> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <p>Lade Inhalte...</p>
      </div>
    );
  }

  return <div style={styles.container}>{children}</div>;
};

export default ContentLayout;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "24px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    fontSize: "18px",
    color: "#555",
  },
};
