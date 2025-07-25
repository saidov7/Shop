import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";

function Login() {
  const { login } = useGlobal();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn = login(username, password);
    if (isLoggedIn) {
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Welcome Back 👋</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="switch-link">Signup</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
