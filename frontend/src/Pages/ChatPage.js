import axios from "axios";
import React, { useEffect, useState } from "react";

const ChatPage = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    const { data } = await axios.get("./api/chat");

    console.log(data);
    setChats(data);
  };
  return (
    <div>
      {chats.map((chat) => (
        <div>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
