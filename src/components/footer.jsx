import { BsStars } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="bg-white border h-28 mt-20">
      <div className="flex items-center justify-center h-full">
        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-gray-600 text-xs">
              Made By:{" "}
              <span className="underline text-sm cursor-pointer">Patrick James Dionen</span>{" "}
            </h1>
            <BsStars size={20} className="text-yellow-400" />
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-gray-500 text-xs">
              Also inspired by the{" "}
              <span className="underline italic cursor-pointer">Unsent Project</span>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
