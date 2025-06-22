import type { ChangeEvent } from "react";

export function Select({
  value,
  onChange,
  options,
  label,
  isDisabled,
}: {
  value: string | number;
  label: string;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string | number; name: string }[];
  isDisabled?: boolean;
}) {
  return (
    <div className="flex flex-col items-start gap-1">
      <label className="text-sm text-gray-800 ml-1 font-medium" htmlFor={label}>
        {label}
      </label>
      <select
        disabled={isDisabled}
        className="bg-white text-gray-900 disabled:bg-gray-200 disabled:cursor-not-allowed border border-gray-300 rounded-md cursor-pointer hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ease-in-out p-2 min-w-[200px] sm:min-w-full"
        id={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}