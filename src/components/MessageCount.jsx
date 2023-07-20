import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const MessageCount = ({ count }) => {
  const [messageCount, setMessageCount] = useState(count);

  useEffect(() => {
    setMessageCount(count);
  }, [count]);

  return (
    <div>
      <div className="flex items-center gap-3">
        <Link to="/allmessages">
          <h1 className="text-gray-500 text-sm">Total Messages:</h1>
        </Link>
        <h1 className="font-black text-blue-600 text-3xl">{messageCount}</h1>
      </div>
    </div>
  );
};
