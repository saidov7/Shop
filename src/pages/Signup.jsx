import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useGlobal } from "../context/GlobalContext";

function Signup() {
  const { signup } = useGlobal();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password);
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create an Account 🚀</h2>
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
          <button type="submit">Signup</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="switch-link">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
