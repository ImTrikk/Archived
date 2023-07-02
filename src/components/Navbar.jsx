import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="p-2">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-red-400"> Archived. </h1>
        <div className="bg-red-400 text-white rounded-md px-8 text-center flex items-center gap-2 justify-center h-6">
          <h1 className="text-xs"> search name...</h1>
          <div>
            <BsSearch size="14px"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
