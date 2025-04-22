import { DateTime } from "luxon";
import TaskModel from "../../models/TaskModel";
import createEventsEndpoint from "../createTasksEndpoint";
jest.useFakeTimers({ now: new Date("2023-10-02T15:23:57.443+02:00") });
describe("events", () => {
    const baseUrl = "http://127.0.0.1:8000/api/tasks";
    const tasks = createEventsEndpoint(baseUrl);
    const createTask = (start, end, isFinish) => ({
        id: 3,
        title: "suchen Arbeit",
        description: "<div>Some Task test content :)</div>",
        is_completed: false,
        created_at: start,
        updated_at: end,
    });
    const createTaskModel = (start, end, isFinish) => new TaskModel({
        path: "/tasks/3",
        title: "suchen Arbeit",
        description: "<div>Some Task test content :)</div>",
        is_completed: isFinish,
        created_at: DateTime.fromISO(start),
        lastUpdate: DateTime.fromISO(end),
    });
    const task1 = createTask("2016-01-31T10:00:00+01:00", "2016-01-31T13:00:00+01:00", false);
    const task2 = createTask("2015-11-29T10:00:00+01:00", "2015-11-29T13:00:00+01:00", false);
    const task3 = createTask("2017-09-29T00:00:00.000+02:00", "2017-09-29T23:59:59.000+02:00", true); // we get these from cms
    const task4 = createTask("2018-02-28T18:00:00.000-05:00", "2018-06-01T17:59:59.000-04:00", true);
    const taskModel1 = createTaskModel("2016-01-31T10:00:00+01:00", "2016-01-31T13:00:00+01:00", false);
    const taskModel2 = createTaskModel("2015-11-29T10:00:00+01:00", "2015-11-29T13:00:00+01:00", false);
    const taskModel3 = createTaskModel("2017-09-29T00:00:00.000+02:00", "2017-09-29T23:59:59.000+02:00", true);
    const taskModel4 = createTaskModel("2018-02-28T18:00:00.000-05:00", "2018-06-01T17:59:59.000-04:00", true);
    const params = {
        path: "/tasks/3",
        title: "",
        description: "",
        is_completed: false,
        created_at: DateTime.now(),
        lastUpdate: DateTime.now(),
    };
    it("should map params to url", () => {
        expect(tasks.mapParamsToUrl(params)).toBe(`https://integreat-api-url.de/api/tasks?start=2016-01-31T10:00:00+01:00&end=2016-01-31T13:00:00+01:00&isFinish=false`);
    });
    const json = [task1, task2, task3, task4];
    it("should map fetched data to models", () => {
        const eventsModels = tasks.mapResponse(json, params);
        const value = [taskModel2, taskModel1, taskModel3, taskModel4];
        expect(eventsModels).toEqual(value);
    });
});
