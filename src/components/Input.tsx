import { ComponentProps } from "solid-js";

export function Input(props: ComponentProps<"input">) {
  return (
    <input
      {...props}
      class="border-2 rounded-md px-2 py-1 bg-transparent text-white font-jetbrains-mono focus:border-2 focus:outline-none"
    />
  );
}
