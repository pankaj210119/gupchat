import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Button from "./Button";

export default function AuthCard() {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <div className="authCard">{isSignup ? <SignupForm/> : <LoginForm />}
    <button onClick={()=>{setIsSignup(!isSignup)}}>{isSignup ? "login" : "sign up"}
      </button>
    </div>
  );
}
