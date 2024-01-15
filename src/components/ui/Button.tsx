import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "solid-js";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva({
  variants: {
    primary:
      " px-3 py-2 bg-neutral-800 hover:bg-neutral-700 transition-colors text-white font-semibold rounded-md flex justify-center",
    stroked:
      "text-white border-2 px-3 py-2 rounded-md transition-colors hover:bg-stone-600/50",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button(props: ButtonProps) {
  const { class: className, children, ...rest } = props;

  return (
    <button
      class={twMerge(
        buttonStyles({
          className,
          ...rest,
        })
      )}
      {...rest}
    >
      {props.children}
    </button>
  );
}
