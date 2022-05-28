import { useState } from "react";

function Input({ setChatText }) {
  const [localText, setLocalText] = useState("");

  function handleTextSubmit(e) {
    e.preventDefault();
    setChatText(localText);
    setLocalText("");
    e.target.reset();
  }

  return (
    <form onSubmit={handleTextSubmit}>
      <label>
        Enter Text 
        <input id="chat-box" type="text" onChange={(e) => {
          const textValue = e.target.value;
          setLocalText(textValue);
        }} />
      </label>
      <button type="submit">Submit Text</button>
    </form>
  );
}

export default Input;