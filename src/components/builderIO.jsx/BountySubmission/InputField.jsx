import React from "react";

function InputField({ label, description, value, onChange }) {
  return (
    <>
      <div className="mt-8 text-lg font-semibold max-md:max-w-full">
        {label}
      </div>
      <div className="mt-2 text-neutral-400 max-md:max-w-full">
        {description}
      </div>
      <input
        className="px-2.5 py-4 mt-2 w-full bg-white rounded border border-solid border-orange-500 border-opacity-50 text-stone-500 max-md:pr-5 max-md:max-w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Add ${label.toLowerCase()}`}
      />
    </>
  );
}

export default InputField;
