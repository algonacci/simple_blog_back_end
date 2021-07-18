import { useState } from "react";
import loginImg from "../assets/loginImg.png";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [empty, setEmpty] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setEmpty(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="login-page">
      <div className="login-page__img">
        <img className="login-page__img--img" src={loginImg} alt="" />
      </div>
      <form className="login-page__form" onSubmit={handleSubmit}>
        <div className="login-page__form--title">
          <h2>Log in to continue</h2>
          <p>Welcome, please log in to your account.</p>
        </div>
        <div className="login-page__form--form">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={handleChange} />
          <p className={`login-page__form--error ${empty ? "active" : ""}`}>
            Required
          </p>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
          <p className={`login-page__form--error ${empty ? "active" : ""}`}>
            Required
          </p>
          <a href="/">Forgot Password?</a>
          <button className="btn login-page__form--btn" onClick={handleSubmit}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
