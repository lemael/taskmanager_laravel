var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import createTaskEndpoint from "../api/endpoints/createTasksEndpoint";
import fetchFromEndpoint from "../api/fetchFromEndpoint";
import ContentLayout from "../components/ContentLayout";
import List from "../components/List";
import TaskItem from "../components/TaskItem";
import cmsApiBaseUrl from "../constants/cmsApiBaseUrl";
const TasksPage = ({ pathname }) => {
    const [tasks, setTasks] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchTasks = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const endpoint = createTaskEndpoint(cmsApiBaseUrl);
                const data = yield fetchFromEndpoint(endpoint, {
                    path: "/tasks",
                    title: "",
                    description: "",
                    is_completed: false,
                    created_at: DateTime.now(),
                    lastUpdate: DateTime.now(),
                }, "GET");
                setTasks(data);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        });
        fetchTasks();
    }, []);
    const renderTaskItem = (task) => (_jsx(TaskItem, { task: task }, task.path));
    return (_jsxs(ContentLayout, { isLoading: loading, children: [_jsx("h1", { children: "Aufgaben\u00FCbersicht" }), error && _jsxs("p", { children: ["Fehler beim Laden: ", error.message] }), _jsx(List, { noItemsMessage: "Keine Aufgaben verf\u00FCgbar.", items: tasks || [], renderItem: renderTaskItem })] }));
};
export default TasksPage;
