import { HiOutlineDownload } from "react-icons/hi";
import { BiCopy } from "react-icons/bi";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import {BiSolidArchiveIn} from "react-icons/bi"

const MessageCard = ({ message }) => {

  return (
    <div  className="w-full md:flex md:flex-wrap gap-6 md:justify-start space-y-5 py-2 md:space-y-0 px-3 md:px-0">
      {message?.map((m, index) => {
        return (
          <div key={index} className="w-full md:w-[285px]">
            <div
              style={{ maxHeight: "700px" }}
              className="w-full h-[250px] flex flex-col p-2 bg-blue-500 rounded-lg"
            >
              <div className="py-3">
                <div className="px-5 flex justify-center">
                  <BiSolidArchiveIn size={25} className="text-white" />
                </div>
                <div className="h-full flex items-center py-2 px-5 justify-center text-center">
                  <h1 className="text-sm text-white">{m.message}</h1>
                </div>
              </div>
              <div className="flex mt-auto items-end justify-center px-3 pt-5">
                <h1 className="text-xs text-white">
                  To: <span className="italic">{m.person}</span>
                </h1>
              </div>
              <div className="flex mt-auto justify-center items-end py-2">
                <div className="flex items-end gap-4 text-blue-800">
                  <div>
                    <AiTwotoneHeart />
                  </div>
                  <div>
                    <BiCopy />
                  </div>
                  <div>
                    <FaShareAlt />
                  </div>
                  <div>
                    <HiOutlineDownload size="20px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageCard;
