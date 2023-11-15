import React from "react";
import { auth } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [activeItem, setActiveItem] = React.useState("register");
  const [email, setEmail] = React.useState("test123@gmail.com");
  const [password, setPassword] = React.useState("test123");
  const [errorMessage, setErrorMessage] = React.useState("");

  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    if (activeItem === "register") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("註冊成功");
          navigate("/memo");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              setErrorMessage("email already in use");
              break;
            case "auth/invalid-email":
              setErrorMessage("invalid email");
              break;
            case "auth/weak-password":
              setErrorMessage("weak password");
              break;
            default:
          }
        });
    } else if (activeItem === "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // navigate("/");
          // setIsLoading(false);
          console.log("登入成功");
          navigate("/memo");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              setErrorMessage("invalid email");
              break;
            case "auth/user-not-found":
              setErrorMessage("user not found");
              break;
            case "auth/wrong-password":
              setErrorMessage("wrong passwprd");
              break;
            default:
          }
        });
    }
  }

  return (
    <>
      <div className="sign-select">
        <input
          type="radio"
          name="sign"
          id="register"
          onClick={() => {
            setErrorMessage("");
            setActiveItem("register");
          }}
        />
        <label htmlFor="register">Sign up</label>
        <input
          type="radio"
          name="sign"
          id="signin"
          onClick={() => {
            setErrorMessage("");
            setActiveItem("signin");
          }}
        />
        <label htmlFor="signin">Log in</label>
      </div>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        {errorMessage && <>{errorMessage}</>}
        <input
          className="button"
          type="submit"
          value={activeItem === "register" ? "Sign up" : "Log in"}
        />
      </form>
    </>
  );
};

export default Login;
