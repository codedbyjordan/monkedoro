import { produce } from "solid-js/store";
import { SettingsOption, setSettings, settings } from "../settings";

type SettingsInput =
  | {
      type: "number" | "text";
      label: string;
      value: string;
    }
  | {
      type: "checkbox";
      label: string;
      checked: boolean;
    };

const SETTINGS_MANAGER_LABELS: Record<SettingsOption, SettingsInput> = {
  pomodoroTimeInSeconds: {
    type: "number",
    label: "Pomodoro Time (in seconds)",
    value: settings.pomodoroTimeInSeconds.toString(),
  },
  breakTimeInSeconds: {
    type: "number",
    label: "Break Time (in seconds)",
    value: settings.breakTimeInSeconds.toString(),
  },
  sound: {
    type: "checkbox",
    label: "Sound",
    checked: settings.sound,
  },
};

export function SettingsManager() {
  const handleSettingsChange = (
    key: SettingsOption,
    e: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) => {
    const isCheckbox = e.target.getAttribute("type") === "checkbox";

    setSettings(
      produce((settings) => {
        settings[key] = isCheckbox
          ? e.currentTarget.checked
          : Number(e.currentTarget.value);
      })
    );
  };

  return (
    <div class="w-[500px] border-2 rounded-md p-2 text-white font-jetbrains-mono flex flex-col gap-2">
      {Object.entries(SETTINGS_MANAGER_LABELS).map(([key, inputProps]) => {
        return (
          <div class="flex items-center justify-between">
            <span>{inputProps.label}</span>
            <input
              {...inputProps}
              class="border rounded-md bg-transparent p-1"
              onChange={(e) => handleSettingsChange(key as SettingsOption, e)}
            />
          </div>
        );
      })}
    </div>
  );
}
