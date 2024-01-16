import { produce } from "solid-js/store";
import { setSettings, settings } from "../settings/settings";
import { Icon } from "solid-heroicons";
import { speakerWave, speakerXMark } from "solid-heroicons/solid";
import { Button } from "./Button";
import { twMerge } from "tailwind-merge";

export function AudioToggleButton(props: { class?: string }) {
  return (
    <Button
      onClick={() => {
        setSettings(produce((settings) => (settings.sound = !settings.sound)));
      }}
      variant="stroked"
      class={twMerge("w-12 h-12", props.class)}
    >
      <Icon path={settings.sound ? speakerWave : speakerXMark} />
    </Button>
  );
}
