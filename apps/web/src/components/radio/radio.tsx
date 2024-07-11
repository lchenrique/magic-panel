import React, { useState } from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  defaultValue?: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="flex gap-3 items-center">
      {options.map((option) => (
        <label key={option.value} className="flex gap-2">
          <input
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleChange}
            className="accent-primary scale-110"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
