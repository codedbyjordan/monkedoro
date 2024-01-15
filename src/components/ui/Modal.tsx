import { Icon } from "solid-heroicons";
import { xMark } from "solid-heroicons/solid";
import { JSXElement } from "solid-js";
import { twMerge } from "tailwind-merge";

export type ModalProps = {
  onClose: () => void;
  title?: string;
  className?: string;
  children: JSXElement;
};

export function Modal({ title, onClose, className, children }: ModalProps) {
  return (
    <div
      class={twMerge(
        "border-2 rounded-md text-white font-jetbrains-mono flex flex-col gap-2",
        className
      )}
    >
      <div class="w-full flex items-center justify-between border-b p-2">
        <span>{title}</span>
        <button onClick={onClose} class="w-6 h-6">
          <Icon path={xMark} />
        </button>
      </div>
      <div class="p-2">{children}</div>
    </div>
  );
}
