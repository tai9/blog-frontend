import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

type FromState = {
  username: string;
  password: string;
};

const Login = () => {
  const history = useHistory();
  const [form, setForm] = useState<FromState>({ username: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src="https://img.icons8.com/nolan/64/blogger.png" alt="logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <span className="underlineHover">Forgot Password?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
