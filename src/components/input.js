import { useState } from "react";

function Input({ username, chatLog, setChatLog }) {
  const [chatText, setChatText] = useState("");

  function handleTextSubmit(e) {
    e.preventDefault();
    const time = new Date(Date.now());
    const newText = {
      time: time.toTimeString(),
      user: username,
      text: chatText
    };
    const entries = [...chatLog];
    entries.push(newText);
    setChatLog(entries);
    setChatText("");
    e.target.reset();
  }

  return (
    <form onSubmit={handleTextSubmit}>
      <label>
        Enter Text 
        <input id="chat-box" type="text" onChange={(e) => {
          const textValue = e.target.value;
          setChatText(textValue);
        }} />
      </label>
      <button type="submit">Submit Text</button>
    </form>
  );
}

export default Input;