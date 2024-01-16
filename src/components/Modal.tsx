import { Icon } from "solid-heroicons";
import { xMark } from "solid-heroicons/solid";
import { JSXElement, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { twMerge } from "tailwind-merge";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
  children: JSXElement;
};

export function Modal(props: ModalProps) {
  return (
    <Show when={props.isOpen}>
      <Portal>
        <div
          class={twMerge(
            "border-2 rounded-md text-white font-jetbrains-mono flex flex-col gap-2 absolute top-0",
            props.className
          )}
        >
          <div class="w-full flex items-center justify-between border-b p-2">
            <span>{props.title}</span>
            <button onClick={props.onClose} class="w-6 h-6">
              <Icon path={xMark} />
            </button>
          </div>
          <div class="p-2">{props.children}</div>
        </div>
      </Portal>
    </Show>
  );
}
