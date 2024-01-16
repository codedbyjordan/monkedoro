import { Howl } from "howler";
import { HowlOptions } from "howler";
import { settings } from "../settings/settings";

export function playSound(
  file: string,
  howlOptions?: Omit<HowlOptions, "src">
) {
  if (!settings.sound) return;

  const sound = new Howl({
    src: [`./audio/${file}.mp3`],
    ...howlOptions,
  });
  sound.play();
}
