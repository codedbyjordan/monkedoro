import { produce } from "solid-js/store";
import { setSettings, settings } from "../settings";
import { Icon } from "solid-heroicons";
import { speakerWave, speakerXMark } from "solid-heroicons/solid";
import { StrokedButton } from "./ui/StrokedButton";

export function AudioToggleButton(props: { class?: string }) {
  return (
    <StrokedButton
      onClick={() => {
        setSettings(produce((settings) => (settings.sound = !settings.sound)));
      }}
      class={props.class}
    >
      <Icon path={settings.sound ? speakerWave : speakerXMark} />
    </StrokedButton>
  );
}
