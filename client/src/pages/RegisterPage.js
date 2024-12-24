import React, { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("Registration successful");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleRegister}>
        <h2 className="form-heading">Join Us at Post Forge</h2>
        <p className="form-subtext">
          Create your account and share your stories
        </p>
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
        <button type="submit" className="form-button">
          Register Now
        </button>
      </form>
    </div>
  );
}
