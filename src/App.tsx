import { Show, createSignal } from "solid-js";
import { AudioToggleButton } from "./components/AudioToggleButton";
import { Pomodoro } from "./components/Pomodoro";
import { SettingsManager } from "./components/SettingsManager";
import { settings } from "./settings";
import { StrokedButton } from "./components/ui/StrokedButton";
import { Icon } from "solid-heroicons";
import { cog_8Tooth } from "solid-heroicons/solid";

export function App() {
  const [isSettingsOpen, setIsSettingsOpen] = createSignal(false);

  return (
    <div class="w-full h-dvh bg-neutral-900 flex justify-center items-center">
      <div class="absolute top-4 left-4 flex flex-col gap-4">
        <div class="flex gap-4">
          <AudioToggleButton />
          <StrokedButton onClick={() => setIsSettingsOpen(!isSettingsOpen())}>
            <Icon path={cog_8Tooth}></Icon>
          </StrokedButton>
        </div>
        <Show when={isSettingsOpen()}>
          <SettingsManager onClose={() => setIsSettingsOpen(false)} />
        </Show>
      </div>
      <Pomodoro
        pomodoroTime={settings.pomodoroTimeInSeconds}
        breakTime={settings.breakTimeInSeconds}
      />
    </div>
  );
}
