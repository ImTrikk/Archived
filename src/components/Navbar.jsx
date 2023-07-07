import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="p-2">
      <Link to="/">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-blue-500"> Archived. </h1>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
