import logo from './logo.svg';
import './App.css';
import Input from "./components/input";
import LoginForm from "./components/loginForm";



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h3>Chat App</h3>
      </header> */}
      <div className="content">
        <LoginForm />
        <Input />
      </div>
    </div>
  );
}

export default App;
