import {useState} from "react";
import signupUser from "../firebase/authServices";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signupUser(email, password);
      console.log("signup successful")
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form id="signUpForm" onSubmit={handleSignup}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="enter email"/>
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="create Password"/>
      <button type="submit">sign up</button>
    </form>
  );
}
