import { For } from "solid-js";
import {
  pomodoroSessions,
  setPomodoroSessions,
} from "./pomodoro-sessions-store";

export function Sessions() {
  const formatDate = (date: number) => {
    const dateObj = new Date(date);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(dateObj);
  };

  const clearSessions = () => {
    setPomodoroSessions([]);
    localStorage.setItem("pomodoroSessions", "[]");
  };

  return (
    <div class="w-full text-white font-jetbrains-mono border-l-2 border-y-2 rounded-l-lg">
      <div class="border-b px-3 py-2 flex items-center justify-between">
        <span class="text-lg font-medium">Sessions</span>
        <button class="font-medium underline text-sm" onClick={clearSessions}>
          Clear
        </button>
      </div>
      <div class="px-3 py-2 flex flex-col gap-4">
        <For each={pomodoroSessions}>
          {(session, index) => (
            <div class="flex flex-col gap-2">
              <span>Session #{index() + 1}</span>
              <div>
                <span>
                  {formatDate(session.startTime)} -{" "}
                  {index() === pomodoroSessions.length || !session.endTime
                    ? "In progress"
                    : formatDate(session.endTime)}
                </span>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
