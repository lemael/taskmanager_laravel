import { NOT_FOUND_ROUTE } from "../routes";
const normalizePath = require("normalize-path");
const normalize = (value) => {
    try {
        return decodeURIComponent(normalizePath(value)).toLowerCase();
    }
    catch (_) {
        return NOT_FOUND_ROUTE;
    }
};
export default normalize;
