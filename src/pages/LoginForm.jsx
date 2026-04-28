import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./login.module.css";

import {
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import { auth } from "../services/firebase";
import { loginUser, loginWithGoogle } from "../services/authServices";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const applyPersistence = async () => {
    await setPersistence(
      auth,
      rememberMe ? browserLocalPersistence : browserSessionPersistence
    );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await applyPersistence();
      await loginUser(email, password);
      navigate("/dashboard");
      alert("You have logged in to your account");
    } catch (error) {
      console.error(error);
      alert("Login failed");
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
      alert("Google login failed");
    }
  };

  return (
    <section>
      <div className={styles.loginBox}>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>

          <div className={styles.inputBox}>
            <span className={styles.icon}>
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

          <div className={styles.inputBox}>
            <span className={styles.icon}>
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

          <div className={styles.rememberForgot}>
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

          <div className={styles.registerLink}>
            <p>
              Don’t have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>

          <div className={styles.googleAuth}>
            <button
              type="button"
              className={styles.googleLoginBtn}
              onClick={handleLoginWithGoogle}
            >
              <span className={styles.icon}>
                <ion-icon name="logo-google"></ion-icon>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}