import { useEffect, useState } from "react";

function Chat({ username, chatLog }) {
  const [chatTexts, setChatTexts] = useState(0);

  useEffect(() => {
    setChatTexts(chatLog.length);
  }, [chatLog]);

  function ChatText({ e }) {
    const time = e["time"];
    const user = e["user"];
    const text = e["text"];
    if (user === username) {
      return (
        <li key={time} className="you-text">
          {user}@{time}: <strong>{text}</strong>
        </li>
      );
    } else {
      return (
        <li key={time} className="other-text">
          {user}@{time}: <strong>{text}</strong>
        </li>
      );
    }
  }

  return (
    <div className="chat-container">
      Chat Length: {chatTexts}
      <ul className="chat-list">
        {chatLog.map((e) => <ChatText e={e} />)}
      </ul>
    </div>
  )
}

export default Chat;