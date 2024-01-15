import { AudioToggleButton } from "./components/AudioToggleButton";
import { Pomodoro } from "./components/Pomodoro";
import { settings } from "./settings";

export function App() {
  return (
    <div class="w-full h-dvh bg-neutral-900 flex justify-center items-center">
      <AudioToggleButton class="absolute top-4 left-4" />
      <Pomodoro
        pomodoroTime={settings.pomodoroTimeInSeconds}
        breakTime={settings.breakTimeInSeconds}
      />
    </div>
  );
}
