import React from "react";

const SortButton = ({ setSortOption }) => {
  const handleSortChange = (event) => {
    setSortOption(event.target.value); // Update the sortOption state in the parent component
  };

  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="h-9 text-gray-500 text-xs bg-white border rounded-md shadow-sm appearance-none outline-none px-4"
        onChange={handleSortChange} // Add the onChange event handler
      >
        <option>Sort Messages</option>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default SortButton;

