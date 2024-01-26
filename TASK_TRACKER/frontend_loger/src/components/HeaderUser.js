import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const logoutModal = () => {
    setShowLogoutModal(true);
  };

  const headers = {
    position: "relative",
    maxWidth: "100%",
    padding: "2%",
    backgroundColor: "rgba(87, 55, 252, 0.52)",
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
    color: "white",
    fontSize: "1.3rem",
    fontStyle: "verdana",
  };
  const footerLogoutMessage = {
    backgroundColor: "rgba(87, 55, 252, 0.52)",
  };

  const logoutMessageModal = {
    textAlign: "center",
  };

  const editHeader = {
    backgroundColor: "rgba(87, 55, 252, 0.52)",
  };

  const navigate = useNavigate();

  const logoutClicked = async () => {
    try {
      navigate("/login");
      localStorage.clear();
      toast.success("Successfully logged out", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={headers}>
        <h4 style={titleLogo}>Time Tracker</h4>

        <nav style={navbar} class="navbar navbar-expand-sm ">
          <div class="container-fluid">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a style={link} class="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <button style={link} class="nav-link" onClick={logoutModal}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <Modal
        className="container mt-5 py-5"
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
      >
        <Modal.Header closeButton style={editHeader}>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3 mt-3">
            <h5 className="" style={logoutMessageModal}>
              Are you sure you want to logout?
            </h5>
          </div>
        </Modal.Body>
        <Modal.Footer style={footerLogoutMessage}>
          <Button
            className="btn btn-danger"
            onClick={() => setShowLogoutModal(false)}
          >
            Close
          </Button>
          <Button className="btn btn-success" onClick={logoutClicked}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
