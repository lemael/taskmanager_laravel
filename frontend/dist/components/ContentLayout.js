import { jsx as _jsx } from "react/jsx-runtime";
const ContentLayout = ({ isLoading, children }) => {
    if (isLoading) {
        return (_jsx("div", { style: styles.loadingContainer, children: _jsx("p", { children: "Lade Inhalte..." }) }));
    }
    return _jsx("div", { style: styles.container, children: children });
};
export default ContentLayout;
const styles = {
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
