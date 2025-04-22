// src/api/createTaskEndpoint.ts
import { DateTime } from "luxon";
import EndpointBuilder from "../EndpointBuilder";
import TaskModel from "../models/TaskModel";
export const TASKS_ENDPOINT_NAME = "tasks";
const createTaskEndpoint = (baseUrl) => new EndpointBuilder(TASKS_ENDPOINT_NAME)
    .withParamsToUrlMapper(() => {
    const cleanedBaseUrl = baseUrl.replace(/\/$/, "");
    return `${cleanedBaseUrl}/tasks`;
})
    .withParamsToBodyMapper((params) => {
    const formData = new FormData();
    formData.append("title", params.title);
    formData.append("description", params.description || "");
    formData.append("is_completed", String(params.is_completed));
    return formData;
})
    .withMapper((json) => {
    return new TaskModel({
        path: `/tasks/${json.id}`,
        title: json.title,
        description: json.description,
        is_completed: json.is_completed,
        created_at: DateTime.fromISO(json.created_at),
        lastUpdate: DateTime.fromISO(json.updated_at),
    });
})
    .build();
export default createTaskEndpoint;
