import Input from "../components/Input";
import Button from "../components/Button";
import "./login.css";

export default function LoginForm() {
  return (
    <form id="LoginForm">
      <Input type={"email"} placeholder={"enter email"} />
      <Input type={"password"} placeholder={"enter password"} />
      <button type="submit" id="loginSubmit">Login</button>
    </form>
  );
}
