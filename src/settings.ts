import { createStore } from "solid-js/store";

export const [settings, setSettings] = createStore({
  sound: true,
  pomodoroTimeInSeconds: 1500,
  breakTimeInSeconds: 300,
});
