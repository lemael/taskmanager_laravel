import { NOT_FOUND_ROUTE } from "../pages";
const normalizePath = require("normalize-path");
const normalize = (value: string): string => {
  try {
    return decodeURIComponent(normalizePath(value)).toLowerCase();
  } catch (_) {
    return NOT_FOUND_ROUTE;
  }
};

export default normalize;
