import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [username, setUsername] = useState(null); // Use lowercase 'username'

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      method: "GET",
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username); // Update to match the backend response
      });
    });
  }, []);

  return (
    <header>
      <Link to="/" className="logo">
        PostForge
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create Post</Link>
            <Link to='/logout'>Logout</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
