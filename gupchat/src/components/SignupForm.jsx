import Button from "./Button";
import Input from "./Input";

export default function SignupForm() {
  return (
    <>
      <h3>Sign up</h3> <br />
      <Input type={"text"} place_holder={"display name"} />
      <br />
      <Input type={"email"} place_holder={"email"} />
      <Input type={"password"} place_holder={"password"} />
      <Input type={"tel"} place_holder={"phone no."} />
    </>
  );
}
