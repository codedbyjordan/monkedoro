import { Icon } from "solid-heroicons";
import { cog_8Tooth } from "solid-heroicons/solid";
import { Show, createSignal } from "solid-js";
import { AudioToggleButton } from "./components/AudioToggleButton";
import { Pomodoro } from "./components/Pomodoro";
import { SettingsManager } from "./components/SettingsManager";
import { Button } from "./components/ui/Button";
import { settings } from "./settings";

export function App() {
  const [isSettingsOpen, setIsSettingsOpen] = createSignal(false);

  return (
    <div class="w-full h-dvh bg-neutral-900 flex justify-center items-center">
      <div class="absolute top-4 left-4 flex flex-col gap-4">
        <div class="flex gap-4">
          <AudioToggleButton />
          <Button
            variant="stroked"
            onClick={() => setIsSettingsOpen(!isSettingsOpen())}
            class="w-12 h-12"
          >
            <Icon path={cog_8Tooth}></Icon>
          </Button>
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
