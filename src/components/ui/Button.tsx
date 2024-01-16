import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "solid-js";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  "px-3 py-2 w-full rounded-md transition-colors flex justify-center items-center",
  {
    variants: {
      variant: {
        primary: "bg-neutral-800 hover:bg-neutral-700 text-white font-semibold",
        stroked: "text-white border-2 hover:bg-stone-600/50",
      },
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button(props: ButtonProps) {
  const { class: className, children, ...rest } = props;

  return (
    <button
      class={twMerge(
        buttonStyles({
          variant: props.variant ?? "primary",
        }),
        className
      )}
      {...rest}
    >
      {props.children}
    </button>
  );
}
