import { useEffect, useState } from "react";

function Chat({ chatLog }) {
  const [chatTexts, setChatTexts] = useState(0);

  useEffect(() => {
    setChatTexts(chatLog.length);
    console.log(chatTexts);
  }, [chatLog]);

  function ChatText({ e }) {
    const time = e["time"];
    const user = e["user"];
    const text = e["text"];
    return (
      <li key={time}>
        {user}@{time}: <strong>{text}</strong>
      </li>
    )
  }

  return (
    <div key="chat">
      Chat Length: {chatTexts}
      <ul className="chat-list">
        {chatLog.map((e) => <ChatText e={e} />)}
      </ul>
    </div>
  )
}

export default Chat;