import { useEffect, useState } from "react";
import { buildUrl } from "../../api/utils/buildUrl";
import Buttons from "../components/Buttons";
import Headers from "../components/Headers";
import MessageCard from "../components/MessageCard";
import Navbar from "../components/Navbar";
import Search from "../components/SearchComponent";

export const MainPage = () => {
  const [message, setMessage] = useState([]);

  const getMessages = async () => {
    try {
      let response = await fetch(buildUrl("/message/all"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setMessage(data);
    } catch (err) {
      console.log("There is an error getting the messages from the server");
      console.log(err);
    }
  };
  useEffect(() => {
    getMessages();
  }, []);

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

      <div>
        <MessageCard message={message} />
      </div>
    </div>
  );
};
