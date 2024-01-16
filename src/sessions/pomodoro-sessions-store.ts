import { createStore } from "solid-js/store";

type PomodoroSession = {
  startTime: number;
  endTime: number | null;
};

const localStoragePomodoroSessions = localStorage.getItem("pomodoroSessions");

export const [pomodoroSessions, setPomodoroSessions] = createStore<
  PomodoroSession[]
>(localStoragePomodoroSessions ? JSON.parse(localStoragePomodoroSessions) : []);
