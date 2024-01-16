import { Icon } from "solid-heroicons";
import { arrowPath, pause, play } from "solid-heroicons/solid";
import { Show, createSignal, onCleanup } from "solid-js";
import { Button } from "./ui/Button";

type PomodoroProps = {
  pomodoroTime: number;
  breakTime: number;
  onNewSession: (sessionStartTime: number) => unknown;
};

export function Pomodoro(props: PomodoroProps) {
  const [pomodoroTimeLeft, setPomodoroTimeLeft] = createSignal(
    props.pomodoroTime
  );
  const [breakTimeLeft, setBreakTimeLeft] = createSignal(props.breakTime);

  const [isBreak, setIsBreak] = createSignal(false);
  const [isPaused, setIsPaused] = createSignal(false);

  props.onNewSession(Date.now());

  const pomodoroInterval = setInterval(() => {
    if (isPaused()) return;

    if (isBreak()) {
      setBreakTimeLeft(breakTimeLeft() - 1);
      if (breakTimeLeft() === 0) {
        setIsBreak(false);
        setPomodoroTimeLeft(props.pomodoroTime);
        props.onNewSession(Date.now());
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

  const restartSession = () => {
    setIsBreak(false);
    setIsPaused(false);
    setPomodoroTimeLeft(props.pomodoroTime);
    setBreakTimeLeft(props.breakTime);
  };

  return (
    <div class="w-1/2 flex flex-col items-center justify-center font-jetbrains-mono font-medium text-[#8ba888] gap-2">
      <h1 class="text-9xl">
        <Show when={isBreak()} fallback={formatTime(pomodoroTimeLeft())}>
          {formatTime(breakTimeLeft())}
        </Show>
      </h1>
      <Button onClick={() => setIsPaused(!isPaused())} class="w-1/3">
        {isPaused() ? (
          <Icon path={play} class="w-8 h-8" />
        ) : (
          <Icon path={pause} class="w-8 h-8" />
        )}
      </Button>

      <Button class="w-1/3" onClick={() => restartSession()}>
        <Icon path={arrowPath} class="w-8 h-8" />
      </Button>
    </div>
  );
}
