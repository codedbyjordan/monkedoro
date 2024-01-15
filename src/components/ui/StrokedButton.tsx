import { ComponentProps } from "solid-js";
import { twMerge } from "tailwind-merge";

export function StrokedButton(props: ComponentProps<"button">) {
  const { class: className, children, ...rest } = props;

  return (
    <button
      class={twMerge(
        "w-12 h-12 text-white border-2 p-2 rounded-md transition-colors hover:bg-stone-600/50",
        className
      )}
      {...rest}
    >
      {props.children}
    </button>
  );
}
