import { BsStars } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="flex">
      <div className="bg-white border h-28 w-full mt-20">
        <div className="flex items-center justify-center h-full">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-gray-600 text-xs">
                Developed By:{" "}
                <a href="https://patrick-dionen.vercel.app/">
                  <span className="underline text-sm cursor-pointer">
                    Patrick James Dionen
                  </span>{" "}
                </a>
              </h1>
              <BsStars size={20} className="text-yellow-400" />
            </div>
            <div className="flex items-center justify-center">
              <h1 className="text-gray-500 text-xs">
                Also inspired by the{" "}
                <a href="https://theunsentproject.com/#">
                  <span className="underline italic cursor-pointer">
                    Unsent Project
                  </span>{" "}
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
