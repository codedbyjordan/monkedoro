import { For } from "solid-js";
import { pomodoroSessions } from "./pomodoro-sessions";

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

  return (
    <div class="text-white font-jetbrains-mono border-l-2 border-y-2 rounded-l-lg">
      <div class="border-b p-2">
        <span class="text-lg font-medium">Sessions</span>
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
