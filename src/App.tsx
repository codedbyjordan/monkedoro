import { produce } from "solid-js/store";
import { AudioToggleButton } from "./components/AudioToggleButton";
import { Pomodoro } from "./components/Pomodoro";
import { SettingsManager } from "./components/SettingsManager";
import { SessionManager } from "./components/sessions/SessionManager";
import { setPomodoroSessions } from "./pomodoro-sessions";
import { settings } from "./settings";

export function App() {
  const handleNewSession = (sessionStartTime: number) => {
    setPomodoroSessions(
      produce((pomodoroSessions) => {
        pomodoroSessions.push({
          startTime: sessionStartTime,
          endTime: null,
        });
      })
    );
  };

  return (
    <div class="w-full h-dvh bg-neutral-900 grid grid-cols-7">
      <div class="flex flex-col gap-4 p-2">
        <div class="flex gap-4">
          <AudioToggleButton />
          <SettingsManager />
        </div>
      </div>
      <div class="col-span-5 flex justify-center items-center h-full">
        <Pomodoro
          pomodoroTime={settings.pomodoroTimeInSeconds}
          breakTime={settings.breakTimeInSeconds}
          onNewSession={handleNewSession}
        />
      </div>
      <SessionManager />
    </div>
  );
}
