import ReactSelect, { Props } from "react-select";
import clsx from "clsx";
import Icon from "../icons";

export type Option = {
  label: string;
  value: string;
};

type SelectProps = Props & {
  size?: "md" | "lg";
  classes?: {
    container?: string;
    valueContainer?: string;
    multiValue?: string;
    control?: string;
    menu?: string;
    option?: string;
  };
};

const Select = (props: SelectProps) => {
  const { classNames, size = "md", ...rest } = props;
  const controlClasses = clsx(
    "border-0 shadow-select rounded-lg px-4 py-3 flex items-center",
    {
      "min-h-12": size === "md",
      "min-h-14": size === "lg",
    }
  );

  const multiValueClasses = clsx(
    "bg-cornflowerBlue rounded-full px-3 flex items-center",
    {
      "py-1": size === "lg",
    }
  );

  return (
    <div>
      <ReactSelect
        unstyled
        isMulti
        isClearable={false}
        components={{
          DropdownIndicator: () => (
            <div>
              <Icon name="chevron-down" className="fill-blue" />
            </div>
          ),
        }}
        classNames={{
          container: () => clsx(props.classes?.container ?? ""),
          valueContainer: () => "flex flex-wrap gap-2",
          multiValue: () => multiValueClasses,
          control: () => controlClasses,
          menu: () =>
            "shadow-select rounded-b-lg translate-y-1 pt-1 pb-3 bg-white",
          option: (state) => {
            if (!state.isMulti) {
              if (state.isSelected) {
                return "bg-cornflowerBlue px-6 py-2";
              }

              return "hover:bg-cornflowerBlue px-6 py-2";
            }

            if (state.isSelected || state.isFocused) {
              return "bg-cornflowerBlue px-6 py-2";
            }

            return "hover:bg-cornflowerBlue px-6 py-2";
          },
        }}
        {...rest}
      />
    </div>
  );
};

export default Select;
