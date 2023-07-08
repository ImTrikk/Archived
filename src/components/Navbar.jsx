import { Link } from "react-router-dom";
import {BiSolidArchiveIn} from "react-icons/bi"

const Navbar = () => {
  return (
    <div className="p-2">
      <Link to="/">
        <div className="flex items-center gap-1">
          <BiSolidArchiveIn className="text-blue-500"/>
          <h1 className="text-lg font-bold text-blue-500"> Archived. </h1>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
