import { createStore } from "solid-js/store";

export type SettingsOption =
  | "sound"
  | "pomodoroTimeInSeconds"
  | "breakTimeInSeconds";

const DEFAULT_SETTINGS = {
  sound: true,
  pomodoroTimeInSeconds: 5,
  breakTimeInSeconds: 2,
} as const;

const settingsFromLocalStorage = localStorage.getItem("pomodoroSettings");

export const [settings, setSettings] = createStore<Record<SettingsOption, any>>(
  settingsFromLocalStorage
    ? JSON.parse(settingsFromLocalStorage)
    : DEFAULT_SETTINGS
);
