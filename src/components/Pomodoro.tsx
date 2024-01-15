import { Icon } from "solid-heroicons";
import { pause, play } from "solid-heroicons/solid";
import { Show, createSignal, onCleanup } from "solid-js";

type PomodoroProps = {
  pomodoroTime: number;
  breakTime: number;
};

export function Pomodoro(props: PomodoroProps) {
  const [pomodoroTimeLeft, setPomodoroTimeLeft] = createSignal(
    props.pomodoroTime
  );
  const [breakTimeLeft, setBreakTimeLeft] = createSignal(props.breakTime);

  const [isBreak, setIsBreak] = createSignal(false);
  const [isPaused, setIsPaused] = createSignal(false);

  const pomodoroInterval = setInterval(() => {
    if (isPaused()) return;

    if (isBreak()) {
      setBreakTimeLeft(breakTimeLeft() - 1);
      if (breakTimeLeft() === 0) {
        setIsBreak(false);
        setPomodoroTimeLeft(props.pomodoroTime);
      }
    } else {
      setPomodoroTimeLeft(pomodoroTimeLeft() - 1);
      if (pomodoroTimeLeft() === 0) {
        setIsBreak(true);
        setBreakTimeLeft(props.breakTime);
      }
    }
  }, 1000);

  onCleanup(() => clearInterval(pomodoroInterval));

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div class="flex flex-col items-center justify-center font-jetbrains-mono font-medium text-[#8ba888] gap-2">
      <h1 class="text-9xl">
        <Show when={isBreak()} fallback={formatTime(pomodoroTimeLeft())}>
          {formatTime(breakTimeLeft())}
        </Show>
      </h1>
      <button
        class="px-3 py-2 w-full text-xl bg-neutral-800 hover:bg-neutral-700 transition-colors text-white font-semibold rounded-md flex justify-center"
        onClick={() => setIsPaused(!isPaused())}
      >
        {isPaused() ? (
          <Icon path={play} class="w-8 h-8" />
        ) : (
          <Icon path={pause} class="w-8 h-8" />
        )}
      </button>
    </div>
  );
}
