import Input from "./Input";
import Button from "./Button";
import "./login.css";
function handleSubmit(e) {
  e.preventDefault();
  console.log("Form Submitted");
}
export default function LoginForm() {
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <span>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <Input
              type={"email"}
              place_holder={"email"}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </span>
        </div>
        <div className="form-group">
          <span>
            <label htmlFor="exampleInputPassword1">Password</label>
            <Input type={"password"} place_holder= {"password"} id="exampleInputPassword1" />
          </span>
        </div>
        <Button text={"login"} /> 
      </form>
    </div>
  );
}
