const METRIKA_ID = 106719729;

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

export function reachGoal(goal: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.ym !== "function") {
    return;
  }
  if (params) {
    window.ym(METRIKA_ID, "reachGoal", goal, params);
    return;
  }
  window.ym(METRIKA_ID, "reachGoal", goal);
}

