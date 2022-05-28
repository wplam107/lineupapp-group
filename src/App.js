import { useState, useEffect } from 'react';
import './App.css';
import Input from "./components/input";
import LoginForm from "./components/loginForm";
import Chat from"./components/chat";

function App() {
  const [username, setUsername] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [chatText, setChatText] = useState("");

  useEffect(() => {
    if (chatText !== "") {
      const time = new Date(Date.now());
      const newText = {
        time: time.toTimeString(),
        user: username,
        text: chatText
      };
      console.log(newText);
      fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify(newText)
      })
        .then(res => res.json())
        .then(data => setChatLog(data));
    };
  }, [chatText]);

  useEffect(() => {
    async function getData() {
      fetch("http://localhost:3000/")
        .then(res => res.json())
        .then(data => setChatLog(data));
    }

    const interval = setInterval(() => {
      getData();
    }, 1000);
  }, []);

  return (
    <div className="App" key="app">
      <header>
        <h3>Chat App</h3>
      </header>
      <div className="content">
        <div className="login-container">
          <LoginForm username={username} setUsername={setUsername} />
        </div>
        <div className="user-text">
          <Input setChatText={setChatText} />
        </div>
        <div className="ongoing-chat">
          <Chat username={username} chatLog={chatLog} />
        </div>
      </div>
    </div>
  );
}

export default App;
