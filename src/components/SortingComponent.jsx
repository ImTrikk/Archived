import React from "react";

const SortButton = ({ onChange }) => {
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    onChange(selectedOption);
  };

  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="h-9 text-gray-500 text-xs bg-white border rounded-md shadow-sm appearance-none outline-none px-4"
        onChange={handleSortChange}
      >
        <option value="">Sort Messages</option>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default SortButton;
