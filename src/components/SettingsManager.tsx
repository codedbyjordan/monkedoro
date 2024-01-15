import { produce } from "solid-js/store";
import { SettingsOption, setSettings, settings } from "../settings";
import { Modal } from "./ui/Modal";
import { Checkbox } from "./ui/Checkbox";
import { InputChangeEvent } from "../types";
import { Input } from "./ui/Input";
import { For } from "solid-js";

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

const SETTINGS_MANAGER_OPTIONS: Record<SettingsOption, SettingsInput> = {
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

type SettingsManagerProps = {
  onClose: () => void;
};

export function SettingsManager({ onClose }: SettingsManagerProps) {
  const handleSettingsChange = (
    key: SettingsOption,
    value: string | number | boolean
  ) => {
    setSettings(
      produce((settings) => {
        if (SETTINGS_MANAGER_OPTIONS[key].type === "number")
          value = Number(value);
        settings[key] = value;
      })
    );
  };

  const getInputComponent = (
    inputProps: SettingsInput,
    key: SettingsOption
  ) => {
    switch (inputProps.type) {
      case "checkbox":
        return (
          <Checkbox
            checked={settings[key]}
            onChange={(e) => handleSettingsChange(key, e)}
          />
        );
      default:
        return (
          <Input
            {...inputProps}
            value={settings[key]}
            onChange={(e: InputChangeEvent) =>
              handleSettingsChange(key, e.target.value)
            }
          />
        );
    }
  };

  return (
    <Modal title="Settings" onClose={onClose} className="w-[550px]">
      <div class="flex flex-col gap-2">
        <For each={Object.entries(SETTINGS_MANAGER_OPTIONS)}>
          {([key, inputProps]) => {
            return (
              <div class="flex items-center justify-between">
                <span>{inputProps.label}</span>
                {getInputComponent(inputProps, key as SettingsOption)}
              </div>
            );
          }}
        </For>
      </div>
    </Modal>
  );
}
