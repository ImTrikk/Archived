import { Link } from "react-router-dom";
import { BsPlusCircleFill } from "react-icons/bs"

const Buttons = () => {
  return (
    <div className="py-1 m-auto w-full">
      <div>
        <Link to="/write">
          <div className="bg-blue-400 text-white px-3 rounded-md flex items-center justify-center h-8 gap-3">
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
