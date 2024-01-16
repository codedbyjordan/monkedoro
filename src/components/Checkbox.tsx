import { Icon } from "solid-heroicons";
import { check, xMark } from "solid-heroicons/solid";
import { createUniqueId } from "solid-js";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function Checkbox(props: CheckboxProps) {
  const checkboxId = createUniqueId();

  return (
    <div class="w-max">
      <input
        type="checkbox"
        name={checkboxId}
        id={checkboxId}
        class="sr-only"
        onChange={(e) => props.onChange(e.target.checked)}
        checked={props.checked}
      />
      <label for={checkboxId} class="w-max block">
        <Icon
          path={props.checked ? check : xMark}
          class="w-6 h-6 border-2 p-1 rounded-md cursor-pointer select-none stroke stroke-white"
        />
      </label>
    </div>
  );
}
