import { useState } from "react";
import { Link } from "react-router-dom";
import { buildUrl } from "../../utils/buildUrl.js"
import Navbar from "../components/Navbar";

export const WriteMessage = () => {
  const [message, setMessage] = useState("");
  const [person, setPerson] = useState("");

  const saveMessage = async (event) => {
    event.preventDefault();
    try {
      await fetch(buildUrl("/message/write"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          person,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (er) {
      console.log(er);
      console.log("Error Creating Message");
    }
  };

  return (
    <div className="lg:px-96">
      <Navbar />
      <div className="p-5">
        <div className="flex">
          <h1 className="font-bold text-red-400 text-xl">Write a Message</h1>
        </div>
        <div className="py-2">
          <p className="text-[#8d8d8d] text-xs">
            Write a message you always wanted to say to a person
          </p>
        </div>
        <div className="py-5">
          <form onSubmit={saveMessage} action="">
            <div className="space-y-2">
              <div className="border border-red-400 rounded-md">
                <input
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
                  type="text"
                  name="person"
                  placeholder="To someone..."
                  className="w-full text-xs h-8 px-2"
                />
              </div>
              <div className="border border-red-400 h-40 rounded-md flex justify-center items-center">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  name="message"
                  placeholder="Write message..."
                  className="rounded-md text-center text-sm h-full w-full"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="space-y-2">
          <Link to="/">
            <div className="border border-red-400 rounded-md h-8 text-sm flex items-center justify-center">
              <button className="text-red-400">Cancel</button>
            </div>
          </Link>
          <div className="bg-red-400 rounded-md h-8 text-sm flex items-center justify-center">
            <button onClick={saveMessage} className="text-white">Submit</button>
          </div>
        </div>
        <div className="py-2">
          <h1 className="font-bold text-lg text-red-400">Read Me!</h1>
          <p className="text-xs text-[#8d8d8d] px-1">
            Messages will be removed if it offends anyone and{" "}
          </p>
          <div className="py-2 p-6">
            <ul className="text-xs text-[#8d8d8d] space-y-1">
              <li className="list-disc">Be responsible in what you say</li>
              <li className="list-disc">Think before you click</li>
              <li className="list-disc">Don't say bad words</li>
              <li className="list-disc">Don't degrade someone</li>
              <li className="list-disc">Be respectful</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
