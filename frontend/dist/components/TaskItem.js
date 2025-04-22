import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const TaskItem = ({ task }) => {
    return (_jsxs("div", { className: "task-item", style: styles.container, children: [_jsx("h2", { style: styles.title, children: task.title }), _jsx("p", { style: styles.description, children: task.description }), _jsx("a", { href: task.path, style: styles.link, children: "Mehr erfahren" })] }));
};
export default TaskItem;
// Optional: inline styles (tu peux aussi utiliser Tailwind ou CSS modules si tu veux)
const styles = {
    container: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
        backgroundColor: "#f9f9f9",
    },
    title: {
        margin: "0 0 8px 0",
    },
    description: {
        margin: "0 0 12px 0",
        color: "#555",
    },
    link: {
        color: "#007bff",
        textDecoration: "none",
    },
};
