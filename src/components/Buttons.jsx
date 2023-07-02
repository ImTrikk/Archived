import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs"

const Buttons = () => {
  return (
    <div className="px-3 py-1">
      <div className="flex items-center gap-4">
        <Link to="/write">
          <div className="bg-red-400 text-white px-5 rounded-md flex items-center h-8 gap-3">
            <div>
              <BsPlusCircleFill />
            </div>
            <h2 className="text-xs">Create Message</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Buttons;
