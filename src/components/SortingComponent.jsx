import React from "react";

const SortButton = () => {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select className="h-9 text-gray-500 text-xs bg-white border rounded-md shadow-sm appearance-none outline-none px-4">
        <option>Sort Messages</option>
        <option>Latest</option>
        <option>Oldest</option>
      </select>
    </div>
  );
};

export default SortButton;
