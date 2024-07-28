import React from "react";

function SubmitButton({ onClick }) {
  return (
    <button
      className="px-16 py-5 mt-8 text-xl text-white bg-orange-500 rounded-md border border-solid border-orange-500 border-opacity-50 max-md:px-5 max-md:max-w-full"
      onClick={onClick}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
