import { produce } from "solid-js/store";
import { setPomodoroSessions } from "./pomodoro-sessions-store";

export const handleNewSession = (sessionStartTime: number) => {
  setPomodoroSessions(
    produce((pomodoroSessions) => {
      localStorage.setItem(
        "pomodoroSessions",
        JSON.stringify(pomodoroSessions)
      );
      if (pomodoroSessions.length > 0)
        pomodoroSessions[pomodoroSessions.length - 1].endTime =
          sessionStartTime;
      pomodoroSessions.push({
        startTime: sessionStartTime,
        endTime: null,
      });
    })
  );
};
