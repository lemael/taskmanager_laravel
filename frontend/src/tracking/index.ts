import { TasksRouteType } from "../pages";

export const JPAL_TRACKING_CODE_QUERY_PARAM = "jpal_tracking_code";

type OpenPageSignalNameType = "open_page";
export const OPEN_PAGE_SIGNAL_NAME: OpenPageSignalNameType = "open_page";
export type OpenPageSignalType = {
  name: OpenPageSignalNameType;
  pageType: TasksRouteType;
  url: string;
};
type ClosePageSignalNameType = "close_page";
export const CLOSE_PAGE_SIGNAL_NAME: ClosePageSignalNameType = "close_page";
export type ClosePageSignalType = {
  name: ClosePageSignalNameType;
};
type OpenDeepLinkSignalNameType = "open_deep_link";
export const OPEN_DEEP_LINK_SIGNAL_NAME: OpenDeepLinkSignalNameType =
  "open_deep_link";
export type OpenDeepLinkSignalType = {
  name: OpenDeepLinkSignalNameType;
  url: string;
};
type OpenInternalLinkSignalNameType = "open_internal_link";
export const OPEN_INTERNAL_LINK_SIGNAL_NAME: OpenInternalLinkSignalNameType =
  "open_internal_link";
type OpenExternalLinkSignalNameType = "open_external_link";
export const OPEN_EXTERNAL_LINK_SIGNAL_NAME: OpenExternalLinkSignalNameType =
  "open_external_link";
type OpenOsLinkSignalNameType = "open_os_link";
export const OPEN_OS_LINK_SIGNAL_NAME: OpenOsLinkSignalNameType =
  "open_os_link";
type OpenMediaSignalNameType = "open_media";
export const OPEN_MEDIA_SIGNAL_NAME: OpenMediaSignalNameType = "open_media";
export type OpenLinkSignalType = {
  name:
    | OpenInternalLinkSignalNameType
    | OpenExternalLinkSignalNameType
    | OpenOsLinkSignalNameType
    | OpenMediaSignalNameType;
  url: string;
};
type SearchFinishedSignalNameType = "search_finished";
export const SEARCH_FINISHED_SIGNAL_NAME: SearchFinishedSignalNameType =
  "search_finished";
export type SearchFinishedSignalType = {
  name: SearchFinishedSignalNameType;
  query: string;
  url: string | null;
};
type ResumeSignalNameType = "resume";
export const RESUME_SIGNAL_NAME: ResumeSignalNameType = "resume";
export type ResumeSignalType = {
  name: ResumeSignalNameType;
};
type SuspendSignalNameType = "suspend";
export const SUSPEND_SIGNAL_NAME: SuspendSignalNameType = "suspend";
export type SuspendSignalType = {
  name: SuspendSignalNameType;
};
export type AppStateChangeSignalType = ResumeSignalType | SuspendSignalType;
type ShareSignalNameType = "share";
export const SHARE_SIGNAL_NAME: ShareSignalNameType = "share";
export type ShareSignalType = {
  name: ShareSignalNameType;
  url: string;
};
type SendFeedbackSignalNameType = "send_feedback";
export const SEND_FEEDBACK_SIGNAL_NAME: SendFeedbackSignalNameType =
  "send_feedback";
export type SendFeedbackSignalType = {
  name: SendFeedbackSignalNameType;
  feedback: {
    positive: boolean | null;
    numCharacters: number;
    contactMail: boolean;
  };
};
export type SpecificSignalType =
  | OpenPageSignalType
  | ClosePageSignalType
  | OpenDeepLinkSignalType
  | OpenLinkSignalType
  | SearchFinishedSignalType
  | AppStateChangeSignalType
  | ShareSignalType
  | SendFeedbackSignalType;
export type SignalType = SpecificSignalType & {
  trackingCode: string;
  offline: boolean;
  systemLanguage: string;
  currentCity: string | null;
  currentLanguage: string | null;
  appSettings: {
    errorTracking: boolean | null;
    allowPushNotifications: boolean | null;
  };
  timestamp: string;
};
