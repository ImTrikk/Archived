import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { BiCopy } from "react-icons/bi";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";

const MessageCard = ({ message }) => {
  return (
    <div  className="w-full md:flex md:flex-wrap gap-5 md:justify-start space-y-5 py-2 md:py-10 md:space-y-0 px-3 md:px-0">
      {message?.map((m, index) => {
        return (
          <div key={index} className="w-[285px]">
            <div
              style={{ maxHeight: "700px" }}
              className="w-full flex flex-col p-5 bg-yellow-300 rounded-lg"
            >
              <div className="py-3">
                <div className="px-5">
                  <FaQuoteLeft className="text-white" />
                </div>
                <div className="h-full flex items-center py-2 px-5 justify-center text-center">
                  <h1 className="text-sm font-bold text-white">{m.message}</h1>
                </div>
                <div className="flex justify-end px-5">
                  <FaQuoteRight className="text-white" />
                </div>
              </div>
              <div className="flex justify-center">
                <h1 className="text-xs">To: {m.person}</h1>
              </div>
              <div className="flex justify-end pt-5 ">
                <div className="flex items-center gap-4">
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
