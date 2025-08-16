import React from "react";

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (key: string, value: string) => void;
  type?:
    | "number"
    | "text"
    | "search"
    | "time"
    | "hidden"
    | "date"
    | "datetime-local"
    | "email"
    | "month"
    | "password"
    | "tel"
    | "url"
    | "week";
  required?: boolean;
  placeholder?: string;
  [key: string]: any;
}

const TextInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder = "",
  ...props
}: TextInputProps) => (
  <div className="flex flex-col w-full">
    <label className="text-sm" htmlFor={name}>
      {label}
    </label>
    <input
      className="rounded border border-gray-700 px-2 py-2 text-sm font-normal"
      type={type}
      id={name}
      name={name}
      value={value}
      required={required}
      placeholder={placeholder}
      onChange={(e) => onChange(name, e.target.value)}
      {...props}
    />
  </div>
);

export default TextInput;
