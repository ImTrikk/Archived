import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { buildUrl } from "../utils/buildUrl";
import MessageCard from "../components/MessageCard";
import { Footer } from "../components/footer";
import Search from "../components/SearchComponent";
import Buttons from "../components/Buttons";
import SortButton from "../components/SortingComponent";
import { MessageCount } from "../components/MessageCount";

export const AllMessages = () => {
  const [message, setMessage] = useState([]);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("latest"); // Default sort option is "latest"

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

      // Sort messages based on the selected sort option
      let sortedData = [];
      if (sortOption === "latest") {
        sortedData = [...data].sort((a, b) => b.timestamp - a.timestamp);
      } else if (sortOption === "oldest") {
        sortedData = [...data].sort((a, b) => a.timestamp - b.timestamp);
      }

      setMessage(sortedData);
    } catch (err) {
      console.error("Error getting messages:", err);
      setError("There is an error getting the messages from the server");
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div>
      <div className="p-2 lg:px-56">
        <Navbar />
        <div className="mb-5">
          <div className="flex items-center justify-center py-2">
            <h1 className="text-3xl text-blue-500 font-black">All Messages</h1>
          </div>
          <div className="flex justify-center">
            <p className="text-gray-500 text-xs">
              When creating messages, please think before sending
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 md:gap-10 md:px-0">
          <Search />
          <Buttons />
        </div>
        <div className="flex mt-4 mb-2 items-center justify-between px-3 mr-5">
          <div className="">
            <SortButton />
          </div>
          <div>
            <MessageCount />
          </div>
        </div>
        <div>
          {error ? (
            <div className="text-red-500 text-xs flex justify-center mt-20">
              {error}
            </div>
          ) : (
            <div>
              <MessageCard message={message} />
            </div>
          )}
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};
