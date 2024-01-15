import { createStore } from "solid-js/store";

export const [settings, setSettings] = createStore({
  sound: true,
});
