import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buildUrl } from "../utils/buildUrl";
import Buttons from "../components/Buttons";
import Headers from "../components/Headers";
import MessageCard from "../components/MessageCard";
import Navbar from "../components/Navbar";
import Search from "../components/SearchComponent";
import { Footer } from "../components/footer";
import SortButton from "../components/SortingComponent";
import { MessageCount } from "../components/MessageCount";

export const MainPage = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState([]);
  const [sortedMessage, setSortedMessage] = useState([]);
  const [error, setError] = useState(null);

  const getMessages = async () => {
    try {
      let response = await fetch(buildUrl("/message/all"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching messages");
      }

      const data = await response.json();
      setCount(data.length);
      console.log(data);
      setMessage(data);
      setSortedMessage(data); // Set initial sorted messages
    } catch (err) {
      console.error("Error getting messages:", err);
      setError("There is an error getting the messages from the server");
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  // for sorting the messages onChange
  const handleSortChange = (selectedOption) => {
    let sortedMessages = [...message];
    if (selectedOption === "latest") {
      sortedMessages.sort(
        (a, b) => new Date(b.dateField) - new Date(a.dateField)
      );
    } else if (selectedOption === "oldest") {
      sortedMessages.sort(
        (a, b) => new Date(a.dateField) - new Date(b.dateField)
      );
    }

    setSortedMessage(sortedMessages);
  };

  return (
    <div className="h-auto md:h-fit lg:h-screen relative">
      <div className="p-2 lg:px-56 pb-32">
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
        <div className="w-full flex items-center justify-between mt-3 px-3 md:px-0">
          <div className="w-full flex items-center">
            <MessageCount count={count} />
          </div>
          <div className="">
            <SortButton onChange={handleSortChange} />
          </div>
        </div>
        {error ? (
          <div className="text-red-500 text-xs flex justify-center mt-20">
            {error}
          </div>
        ) : (
          <div className="mt-3">
            {/* Render intitially if message is not yet sorted */}
            {sortedMessage.length > 0 ? (
              <MessageCard message={sortedMessage} />
            ) : (
              <MessageCard message={message} />
            )}
            <div className="flex justify-center">
              <Link to="/allmessages">
                <div className="border border-blue-600 text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white px-5 rounded h-8 flex items-center mt-10">
                  <h1 className="text-sm">View All Messages</h1>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-end justify-center mt-auto w-full">
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};
