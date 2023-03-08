import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const users = [
  {
    id: 1,
    email: "user1@gmail.com",
    password: "chi123456",
  },
  {
    id: 2,
    email: "user2@gmail.com",
    password: "chi123456",
  },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const userValid1 = users.find(
      (user) =>
        user.email === "user1@gmail.com" && user.password === "chi123456"
    );

    const userValid2 = users.find(
      (user) =>
        user.email === "user2@gmail.com" && user.password === "chi123456"
    );

    if (email === userValid1.email && password === userValid1.password) {
      toast.success("Login successful");
      navigate("/profile");
    } else if (email === userValid2.email && password === userValid2.password) {
      toast.success("Login successful");
      navigate("/profile");
    } else {
      toast.error("Invalid Email Or Password");
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <p className="login-title">Login</p>
          <label className="login-form-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            value={email}
            placeholder="example@kyanon.digital"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="login-form-label" htmlFor="password">
            Password:
          </label>
          <input
            type={passwordShown ? "text" : "password"}
            value={password}
            placeholder="******"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="login-function">
            <div className="checkbox-container">
              {/* <input
                type="checkbox"
                id="show-pass"
                name="show-pass"
                value="show"
                onClick={() => setPasswordShown(!passwordShown)}
              />

              <label htmlFor="show-pass" className="checkbox-label">
                Show password
              </label> */}

              <label htmlFor="show-pass" className="checkbox-container-label">
                Show password
                <input
                  type="checkbox"
                  id="show-pass"
                  name="show-pass"
                  value="show"
                  onClick={() => setPasswordShown(!passwordShown)}
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <button className="login-btn" type="submit" onClick={handleSubmit}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
