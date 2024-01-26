import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserService } from "../api/user";
// import Header from "./Header";

function RegistrationForm() {
  //our inline style for this component...
  const register = {
    borderLeft: "1px solid rgba(87, 55, 252, 0.52",
    borderRight: "1px solid rgba(87, 55, 252, 0.52",
    borderBottom: "15px solid rgba(87, 55, 252, 0.52",
    borderRadius: "3%",
    width: "800px",
  };

  const haveaccount = {
    backgroundColor: "rgba(87, 55, 252, 0.52",
    border: "none",
  };
  // const header = {
  //   maxWidth: "100%",
  //   padding: "2%",
  //   backgroundColor: "rgba(87, 55, 252, 0.52)",
  // };

  const registerText = {
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "44px",
    fontSize: " 32px",
    marginBottom: "8px",
    color: "#3D3D3D",
  };

  const registerbtn = {
    backgroundColor: "rgba(87, 55, 252, 0.52",
    border: "none",
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //again... im using this useNavigate store in the navigate var to navigate to other cmponent

  const navigate = useNavigate();

  // so navigate to login form if we already have an account!!!!
  const loginClicked = () => {
    navigate("/login");
  };

  //our endpoint to register new  user....
  const handleRegistration = async () => {
    if (!username || !password || !email) {
      toast.warning("Field cant be empty", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      try {
        const payload = {
          username: username,
          password: password,
          email: email,
        };
        const response = await UserService.signup(payload);
        //send  message as response

        console.log(response);
        toast.success("Successfully Registered", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      } catch (error) {
        console.error("error");
      }
    }
  };

  return (
    <div>
      {/* <Header /> */}

      <h4 style={registerText} className="text-center mt-5 mb-3">
        Register a new account
      </h4>
      <div
        style={register}
        className="container align-items-center justify-content-center py-5 col-md-3 "
      >
        <div>
          <label className="form-label">Username:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="form-label">Email:</label>
          <input
            className="form-control"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="form-label">Password:</label>
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          style={registerbtn}
          type="submit"
          onClick={handleRegistration}
          className="btn btn-primary col-md-12 btn-lg mt-3"
        >
          Register
        </button>
        <button
          style={haveaccount}
          className="btn btn-success py-2 mt-4"
          type="submit"
          onClick={loginClicked}
        >
          Already have an account{" "}
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
