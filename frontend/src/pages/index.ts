// Linkable routes
export type TasksRouteType = "tasks";
export const TASKS_ROUTE: TasksRouteType = "tasks";

export type PdfViewModalRouteType = "pdf";
export const PDF_VIEW_MODAL_ROUTE: PdfViewModalRouteType = "pdf";

export type ImageViewModalRouteType = "image";
export const IMAGE_VIEW_MODAL_ROUTE: ImageViewModalRouteType = "image";

// Web routes
export type MainDisclaimerRouteType = "main-disclaimer";
export const MAIN_DISCLAIMER_ROUTE: MainDisclaimerRouteType = "main-disclaimer";

export type NotFoundRouteType = "not-found";
export const NOT_FOUND_ROUTE: NotFoundRouteType = "not-found";

// Changes done to the reserved routes have to be done in the CMS as well:

export const RESERVED_TOP_LEVEL_SLUGS = [
  MAIN_DISCLAIMER_ROUTE,
  NOT_FOUND_ROUTE,
  TASKS_ROUTE,
];

// Changes done to the reserved routes have to be done in the CMS as well:

export const RESERVED_CITY_CONTENT_SLUGS = [TASKS_ROUTE];
