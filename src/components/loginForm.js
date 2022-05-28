import { useState } from "react";

function LoginForm ({ username, setUsername }) {
  const [nameText, setNameText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setUsername(nameText);
  }

  if (username !== "") {
    return (
      <div>{username !== "" ? `Chatting as ${username}` : ""}</div>
    );
  } else {
    return (
      <div>
        <label>
          Login
          <input id="username" type="text" onChange={(e) => {
            const name = e.target.value;
            setNameText(name);
          }} />
        </label>
        <button onClick={handleSubmit}>Submit Name</button>
      </div>
    );
  }
}

export default LoginForm;