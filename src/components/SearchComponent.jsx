
import { BsSearch } from "react-icons/bs"

const Search = () => {
  return (
    <div className="px-3 py-2">
      <div className="border border-red-400 text-white rounded-md px-8 text-center flex items-center gap-2 justify-center h-8">
        <h1 className="text-xs text-red-400"> search name...</h1>
        <div>
          <BsSearch size="14px" className="text-red-400" />
        </div>
      </div>
    </div>
  );
};

export default Search
