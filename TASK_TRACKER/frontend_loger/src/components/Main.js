import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

function Main() {
  const main = {
    backgroundColor: "#5d20d3",
  };
  const mainContainer = {
    maxWidth: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    margin: "2%",
    padding: "0",
  };

  const leftContainer = {
    position: "relative",
    maginLeft: "2px",
  };
  const mainTitle = {
    fontStyle: "Georgia",
    fontSize: "40px",
    color: "#fefcff",
    marginTop: "15%",
  };

  // for hero image
  const heroImage = {
    borderRadius: "2%",
    width: "95%",
    height: "30%",
  };

  const loginbtn = {
    color: "#5d20d3",
    marginTop: "80px",
    backgroundColor: "#71e1e1",
    padding: "20px",
    fontSize: "20px",
    borderRadius: "5px",
    border: "5px",
  };
  const imagePart = {
    marginTop: "5%",
  };
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
    toast.success("Welcome To Home ", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };
  return (
    <div style={main}>
      <Header />
      <div styles={mainContainer}>
        <div className="row ">
          <div styles={leftContainer} className="col-md-6">
            <h6 style={mainTitle}>
              Lorem Ipsum Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut{" "}
            </h6>

            <button style={loginbtn} onClick={handleLogin}>
              Get Started
            </button>
          </div>
          <div className="col-md-6">
            <div style={imagePart}>
              {/* 
                 HERO IMAGE  */}
              <img
                style={heroImage}
                alt=""
                src={require("../image/timeimg.jpg")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
