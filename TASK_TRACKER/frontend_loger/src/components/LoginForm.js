import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserService } from "../api/user";
// import Header from "./Header";
// const jwt = require("jsonwebtoken");

// const secretKey = process.env.PORT;

function LoginForm() {
  //inline styles for this component

  // const login = {
  //   width: "700px",
  // };

  const createButton = {
    border: "none",
  };
  const loginbutton = {
    border: "none",
  };

  const headers = {
    position: "relative",
    maxWidth: "100%",
    padding: "2%",
  };

  const navbar = {
    position: "absolute",
    right: "0",
    top: "2%",
  };

  const titleLogo = {
    color: "white",
    fontStyle: "verdana",
  };

  const link = {
    color: "#fefcff",
    fontSize: "1.3rem",
    fontStyle: "courier",
  };

  const main = {
    backgroundColor: "#5d20d3",
    maxWidth: "100%",
    height: "100vh",
  };
  // const mainContainer = {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   padding: "0",
  //   margin: "0 auto",
  // };
  const imagePart = {
    marginTop: "5%",
  };

  const heroImage = {
    borderRadius: "2%",
    maxWidth: "59%",
    maxHeight: "30%",
  };

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //using this useNavigate to navigate to any components
  const navigate = useNavigate();

  //this will  navigate to registration form
  const createAccount = () => {
    navigate("/register");
  };

  //login endpoints ,sending below's data to request body or to the server
  const handleLogin = async () => {
    if (!password || !email) {
      toast.warning("Field cant be empty", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      try {
        const payload = {
          password: password,
          email: email,
        };

        const response = await UserService.login(payload);
        if (!response) {
          toast.error("User doesnt exist", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        } else {
          localStorage.setItem("TOKEN", JSON.stringify(response.token));

          navigate("/home");

          toast.success("Login Succesfully", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div style={main}>
      {/* <Header /> */}
      <div style={headers}>
        <h4 style={titleLogo}>Time Tracker</h4>

        <nav style={navbar} class="navbar navbar-expand-sm ">
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a style={link} class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a style={link} class="nav-link" href="/">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a style={link} class="nav-link" href="/register">
                  Create Account
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center p-5  ">
          <div className=" col-md-3 p-5">
            <h5 className="text-white mb-5 ">Login to your acccount</h5>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* sign in button */}

            <button
              style={loginbutton}
              type="submit"
              onClick={handleLogin}
              className="btn btn-primary col-md-12 mt-4"
            >
              Sign in
            </button>

            {/* create account button */}
            <button
              className="btn btn-primary mt-3"
              style={createButton}
              type="submit"
              onClick={createAccount}
            >
              Create Account
            </button>
          </div>

          <div className=" col-md-6" style={imagePart}>
            {/* 
                 HERO IMAGE  */}
            <img style={heroImage} alt="" src={require("../image/login.jpg")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
