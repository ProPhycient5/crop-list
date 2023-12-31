import "./App.css";
import Login from "./Login";
import Home from "./Home";
import { useState } from "react";

export default function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <div className="parent">
      <div className="App">
        {loginStatus ? <Home /> : <Login setLoginStatus={setLoginStatus} />}
      </div>
    </div>
  );
}
