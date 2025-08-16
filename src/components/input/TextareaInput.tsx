import * as React from "react";
import { Label } from "radix-ui";

interface TextareaInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (key: string, value: string) => void;
  required?: boolean;
  placeholder?: string;
  [key: string]: any;
}

const TextareaInput = ({
  label,
  name,
  value = "",
  onChange,
  required = false,
  placeholder = "",
  ...props
}: TextareaInputProps) => (
  <div className="flex flex-col w-full">
    <Label.Root className="text-sm" htmlFor={name}>
      {label}
    </Label.Root>
    <textarea
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      required={required}
      placeholder={placeholder}
      className="rounded border border-gray-700 px-2 py-2 text-sm font-normal"
      id="firstName"
      {...props}
    ></textarea>
  </div>
);

export default TextareaInput;
