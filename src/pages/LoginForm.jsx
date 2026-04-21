import { useState } from "react";
import "./login.css";
import {auth} from "../services/firebase"
import { loginUser, loginWithGoogle } from "../services/authServices";
import { Link, useNavigate } from "react-router-dom";
import {
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const applyPersistence = async () => {
    await setPersistence(auth, 
        rememberMe ? browserLocalPersistence : browserSessionPersistence);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try 
      {
        await applyPersistence(); 
      await loginUser(email, password);
      navigate("/dashboard");
      alert("you have logged in to your account"); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await applyPersistence();
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section>
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />{" "}
              Remember me
            </label>
            <Link to="/forgotPassword">Forgot Password</Link>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              don't have an account? <Link to={"/signup"}>Signup</Link>
            </p>
          </div>
          <div className="googleAuth">
            <button
            type="button"
              className="google-login-btn"
              onClick={handleLoginWithGoogle}
            >
              <span className="icon">
                <ion-icon name="logo-google"></ion-icon>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
