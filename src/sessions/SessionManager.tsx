import { Icon } from "solid-heroicons";
import { chevronLeft, chevronRight } from "solid-heroicons/solid";
import { Show, createSignal } from "solid-js";
import { Button } from "@/components/Button";
import { Sessions } from "./Sessions";

export function SessionManager() {
  const [isSessionsManagerOpen, setIsSessionsManagerOpen] = createSignal(false);
  return (
    <div class="flex py-2 justify-end">
      <Button
        variant="stroked"
        class="w-12 h-12 mr-4"
        onClick={() => setIsSessionsManagerOpen(!isSessionsManagerOpen())}
      >
        <Icon
          path={isSessionsManagerOpen() ? chevronRight : chevronLeft}
        ></Icon>
      </Button>
      <Show when={isSessionsManagerOpen()}>
        <Sessions />
      </Show>
    </div>
  );
}
