import Buttons from "../components/Buttons";
import Headers from "../components/Headers";
import MessageCard from "../components/MessageCard";
import Navbar from "../components/Navbar";
import Search from "../components/SearchComponent";

export const MainPage = () => {
  return (
    <div className="p-2 md-28 lg:px-56">
      <div>
        <Navbar />
      </div>
      <div>
        <Headers />
      </div>
      <div className="flex items-center justify-between gap-2 md:gap-10 px-3 md:px-0">
        <Search />
        <Buttons />
      </div>
      <div className="w-full md:flex md:flex-wrap gap-5 md:justify-start space-y-5 py-2 md:py-10 md:space-y-0 px-3 md:px-0">
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
    </div>
  );
};