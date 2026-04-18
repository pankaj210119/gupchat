import { useState } from "react";
import "./login.css";
import { loginUser } from "../services/authServices";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      alert("you have logged in to your account");
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="login-box">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="mail-outline"></ion-icon>
          </span>
          <input
          value={email}
            type="email"
            required
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="lock-closed-outline"></ion-icon>
          </span>
          <input
          value={password}
            type="password"
            required
            placeholder="enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/forgotPassword">Forgot Password</Link>
        </div>
        <button type="submit">Login</button>
        <p>
          don't have an account? <Link to={"/signup"}>Signup</Link>
        </p>
      </form>
    </div>
  );
}
