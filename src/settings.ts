import { createStore } from "solid-js/store";

export type SettingsOption =
  | "sound"
  | "pomodoroTimeInSeconds"
  | "breakTimeInSeconds";

export const [settings, setSettings] = createStore<Record<SettingsOption, any>>(
  {
    sound: true,
    pomodoroTimeInSeconds: 1500,
    breakTimeInSeconds: 300,
  }
);
