import { createStore } from "solid-js/store";

type PomodoroSession = {
  startTime: number;
  endTime: number | null;
};
export const [pomodoroSessions, setPomodoroSessions] = createStore<
  PomodoroSession[]
>([]);
