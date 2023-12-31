// Login.js
import React, { useState } from "react"; // Import the CSS file for styling

function Login({ setLoginStatus }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      credentials.username?.trim() === "bharatagri" &&
      credentials.password?.trim() === "1234"
    ) {
      // Redirect or perform action upon successful login
      console.log("Login Successful");
      setLoginStatus(true);
    } else {
      setError("Invalid username or password");
      setCredentials({
        username: "",
        password: "",
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="login-container">
      <h1>Login CropHub</h1>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={credentials.username}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={credentials.password}
        onChange={handleInputChange}
        className="input-field"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
}

export default Login;
