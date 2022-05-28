import { useState, useEffect } from 'react';
import './App.css';
import Input from "./components/input";
import LoginForm from "./components/loginForm";
import Chat from"./components/chat";

function App() {
  const [username, setUsername] = useState("");
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    console.log(chatLog.length);
  }, [chatLog]);

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
          <Input username={username} chatLog={chatLog} setChatLog={setChatLog} />
        </div>
        <div className="ongoing-chat">
          <Chat chatLog={chatLog} />
        </div>
      </div>
    </div>
  );
}

export default App;
