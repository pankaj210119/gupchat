import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { signupUser } from "../services/authServices";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await signupUser(email, password);
      alert("signup successful");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert(error.message || "Signup failed");
    }
  };
  return (
    <div className="login-box">
      <form onSubmit={handleSignup}>
        <h2>signup</h2>
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
            placeholder="create Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="remember">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit">Login</button>
        <p>
          already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
}
