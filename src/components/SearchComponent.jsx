import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="py-2 w-full">
      <form action="">
        <div className="flex items-center h-8 w-full border border-blue-400 rounded-md px-4">
          <input
            type="text"
            placeholder="Search name..."
            className="text-xs text-center text-gray-500 w-full h-full outline-none"
          />
          <BsSearch className="text-blue-400 cursor-pointer" />
        </div>
      </form>
    </div>
  );
};

export default Search;
