import Buttons from "../components/Buttons";
import Headers from "../components/Headers";
import MessageCard from "../components/MessageCard";
import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <div className="p-2">
      <div>
        <Navbar />
      </div>
      <div>
        <Headers />
      </div>
      <div>
        <Buttons />
      </div>
      <div className="pt-5 w-full md:flex md:flex-wrap gap-5 justify-center space-y-5  md:space-y-0 px-3 md:px-0">
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

export default MainPage;
