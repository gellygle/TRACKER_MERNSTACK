import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoggerService } from "../api/logger";
import HeaderUser from "./HeaderUser";

function CreateLogger() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [todo, setTodo] = useState("");
  const [comments, setComments] = useState("");

  const navigate = useNavigate();

  const register = {
    borderLeft: "1px solid rgba(87, 55, 252, 0.52",
    borderRight: "1px solid rgba(87, 55, 252, 0.52",
    borderBottom: "2px solid rgba(87, 55, 252, 0.52",
    borderRadius: "3%",
    width: "800px",
    padding: "22px",
  };

  const registerbtn = {
    backgroundColor: "rgba(87, 55, 252, 0.52)",
    color: "white",
    border: "none",
  };

  const handleRegistration = async () => {
    if (
      !validateEmail(email) ||
      name.trim() === "" ||
      todo.trim() === "" ||
      comments.trim() === ""
    ) {
      toast.warning("Invalid or empty input. Please check your input fields.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      try {
        const payload = {
          email: email,
          name: name,
          todo: todo,
          comments: comments,
        };

        const response = await LoggerService.addLogger(payload);

        console.log(response);

        navigate("/home");
        toast.success("New Records added", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div>
      <HeaderUser />
      <div
        style={register}
        className="container align-items-center justify-content-center py-5 col-md-3 mt-5"
      >
        <div>
          <label className="form-label">Email:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="form-label">Name:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="form-label">To Do:</label>
          <input
            className="form-control"
            type="text"
            placeholder="To Do"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="form-label">Comments:</label>
          <input
            className="form-control"
            type="text"
            placeholder="Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
          />
        </div>

        <button
          style={registerbtn}
          type="submit"
          onClick={handleRegistration}
          className="btn col-md-12 btn-lg mt-3"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateLogger;
