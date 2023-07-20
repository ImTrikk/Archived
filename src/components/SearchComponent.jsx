import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { buildUrl } from "../utils/buildUrl";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchPerson = async () => {
    try {
      let searchResponse = await fetch(buildUrl("/message/person"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(searchValue);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="py-2 w-full">
      <form onSubmit={handleSearchPerson}>
        <div className="flex items-center h-8 w-full border border-blue-400 rounded-md px-4">
          <input
            type="text"
            name="person"
            value={searchValue}
            onChange={handleChange}
            placeholder="Search name..."
            className="text-xs text-center text-gray-500 w-full h-full outline-none"
          />
          <button type="submit">
            <BsSearch className="text-blue-400 cursor-pointer" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
