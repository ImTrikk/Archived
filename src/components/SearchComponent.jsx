import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="px-3 py-2">
      <div>
        <form action="">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="search name...."
              className="h-8 w-full border border-red-400 rounded-md px-4 text-xs text-center text-[#8d8d8d]"
            />
            <div>
               <BsSearch className="text-red-400"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
