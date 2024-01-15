import { produce } from "solid-js/store";
import { setSettings, settings } from "../settings";
import { Icon } from "solid-heroicons";
import { speakerWave, speakerXMark } from "solid-heroicons/solid";
import { twMerge } from "tailwind-merge";

export function AudioToggleButton(props: { class?: string }) {
  return (
    <button
      class={twMerge(
        "w-12 h-12 text-white border-2 p-2 rounded-md transition-colors hover:bg-stone-600/50",
        props.class
      )}
      onClick={() => {
        setSettings(produce((settings) => (settings.sound = !settings.sound)));
      }}
    >
      <Icon path={settings.sound ? speakerWave : speakerXMark} />
    </button>
  );
}
