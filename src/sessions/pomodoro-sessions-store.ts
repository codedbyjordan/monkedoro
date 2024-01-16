import { createStore } from "solid-js/store";

type PomodoroSession = {
  startTime: number;
  endTime: number | null;
};

const localStoragePomodoroSessions = JSON.parse(
  localStorage.getItem("pomodoroSessions") || "[]"
);

export const [pomodoroSessions, setPomodoroSessions] = createStore<
  PomodoroSession[]
>(localStoragePomodoroSessions);
