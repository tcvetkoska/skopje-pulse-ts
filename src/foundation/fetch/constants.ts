export const standardHeaders: Record<string, string> = {
  Accept: "application/json",
};

export const errorsByStatusCode: Record<number, string> = {
  401: "Unathorized",
  404: "There is some error while accessing the resources.",
};
