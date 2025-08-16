import React from "react";
import { Select } from "radix-ui";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (key: string, value: string) => void;
  options: Option[];
  required?: boolean;
  placeholder?: string;
  [key: string]: any;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  placeholder = "Select an option...",
  ...props
}) => (
  <div className="flex flex-col w-full">
    <label htmlFor={name} className="text-sm">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>

    <Select.Root
      value={value}
      onValueChange={(val) => onChange(name, val)}
      {...props}
    >
      <Select.Trigger
        id={name}
        aria-label={label}
        className="flex justify-between rounded border border-gray-700 p-2 text-left"
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="z-50 bg-white bordee rounded shadow-lg p-3">
          <Select.ScrollUpButton>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="max-h-60 overflow-y-auto">
            {options.map((opt) => (
              <SelectItem
                key={opt.value}
                value={opt.value}
                disabled={opt.disabled}
              >
                {opt.label}
              </SelectItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
);

export default SelectInput;

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => (
  <Select.Item
    {...props}
    ref={forwardedRef}
    className={`flex cursor-pointer justify-between mb-3 ${className}`}
  >
    <Select.ItemText>{children}</Select.ItemText>
    <Select.ItemIndicator>
      <CheckIcon />
    </Select.ItemIndicator>
  </Select.Item>
));
SelectItem.displayName = "SelectItem";
