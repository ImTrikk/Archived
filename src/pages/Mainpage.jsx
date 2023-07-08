import { useEffect, useState } from "react";
import { buildUrl } from "../../api/utils/buildUrl";
import Buttons from "../components/Buttons";
import Headers from "../components/Headers";
import MessageCard from "../components/MessageCard";
import Navbar from "../components/Navbar";
import Search from "../components/SearchComponent";

export const MainPage = () => {
  const [message, setMessage] = useState([]);
  const [error, setError] = useState(null);

  const getMessages = async () => {
    try {
      let response = await fetch(buildUrl("/all"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching messages");
      }

      const data = await response.json();
      setMessage(data);
    } catch (err) {
      console.error("Error getting messages:", err);
      setError("There is an error getting the messages from the server");
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

      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          <MessageCard message={message} />
        </div>
      )}
    </div>
  );
};
