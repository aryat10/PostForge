import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // for displaying login errors
  const [redirect, setRedirect] = useState(false);

  async function handleLogin(ev) {
    ev.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include credentials for cookies
      });

      if (!response.ok) {
        throw new Error("Invalid credentials or server error");
      }

      // Set redirect to true on successful login
      setRedirect(true);

      const data = await response.json();
      console.log("Login successful:", data);
    } catch (error) {
      setErrorMessage("Invalid credentials. Please try again."); // More user-friendly message
      console.error("Error during login:", error);
    }
  }

  // Redirect to homepage if redirect state is true
  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="form-heading">Welcome Back to Post Forge</h2>
        <p className="form-subtext">Let's spread your post/blog again!</p>

        {/* Error message displayed as an alert */}
        {errorMessage && (
          <div className="alert error-alert">
            <p>{errorMessage}</p>
            <button onClick={() => setErrorMessage("")} className="close-alert">
              ×
            </button>
          </div>
        )}

        <input
          type="text"
          className="form-input"
          placeholder="Username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          className="form-input"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />

        <button className="form-button">Log In</button>
      </form>
    </div>
  );
}
