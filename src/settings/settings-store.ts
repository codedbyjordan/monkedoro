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

const localStorageSettings = localStorage.getItem("pomodoroSettings");

export const [settings, setSettings] = createStore<Record<SettingsOption, any>>(
  localStorageSettings ? JSON.parse(localStorageSettings) : DEFAULT_SETTINGS
);
