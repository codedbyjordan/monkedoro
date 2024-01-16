import { createSignal } from "solid-js";
import { Button } from "../components/Button";
import { cog_8Tooth } from "solid-heroicons/solid";
import { Icon } from "solid-heroicons";
import { Settings } from "./Settings";

export function SettingsManager() {
  const [isSettingsOpen, setIsSettingsOpen] = createSignal(false);

  return (
    <>
      <Button
        variant="stroked"
        onClick={() => setIsSettingsOpen(!isSettingsOpen())}
        class="w-12 h-12"
      >
        <Icon path={cog_8Tooth}></Icon>
      </Button>
      <Settings
        isOpen={isSettingsOpen()}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
}
