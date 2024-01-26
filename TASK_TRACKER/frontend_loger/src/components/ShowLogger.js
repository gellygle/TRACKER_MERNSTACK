import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoggerService } from "../api/logger";

function ShowLogger() {
  const [loggerRecords, setLoggerRecords] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [setEditData] = useState({});
  const [editedId, setEditedId] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedName, setEditedName] = useState("");
  const [editedTodo, setEditedTodo] = useState("");
  const [editedComments, setEditedComments] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [recordToDeleteId, setRecordToDeleteId] = useState("");
  const navigate = useNavigate();

  const tableContainerRef = useRef(null);

  useEffect(() => {
    fetchRecords();
  }, []);

  useEffect(() => {
    const initializeDataTable = async () => {
      try {
        const response = await LoggerService.showAllLogs();
        setLoggerRecords(response);

        if (!$.fn.dataTable.isDataTable(tableContainerRef.current)) {
          $(tableContainerRef.current).DataTable({
            paging: true,
            pageLength: 5,

            //if value is null
            columnDefs: [
              {
                defaultContent: "",
                targets: "_all",
              },
            ],
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    initializeDataTable();
  }, []);

  const fetchRecords = async () => {
    try {
      const response = await LoggerService.showAllLogs();
      setLoggerRecords(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (data) => {
    setEditData(data);
    setEditedId(data._id);
    setEditedEmail(data.email);
    setEditedName(data.name);
    setEditedTodo(data.todo);
    setEditedComments(data.comments);
    setShowEditModal(true);
  };

  const handleEditSave = async () => {
    try {
      const payload = {
        id: editedId,
        email: editedEmail,
        name: editedName,
        todo: editedTodo,
        comments: editedComments,
      };

      const response = await LoggerService.editLogger(payload);
      console.log(response.data);

      toast.success("Record Updated Successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      setShowEditModal(false);
      fetchRecords();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteModal = (id) => {
    setRecordToDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      const response = await LoggerService.deleteLogger(recordToDeleteId);
      console.log(response);

      toast.error("Deleted", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });

      setShowDeleteModal(false);

      setLoggerRecords((prevRecords) =>
        prevRecords.filter((record) => record._id !== recordToDeleteId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const addNewRecords = () => {
    navigate("/add");
  };

  const deleteHeader = {
    backgroundColor: "rgba(87, 55, 252, 0.52)",
    color: "white",
  };

  const deleteMessageModal = {
    textAlign: "center",
  };

  const addButton = {
    backgroundColor: "rgba(87, 55, 252, 0.52)",
    color: "white",
  };

  const editHeader = {
    backgroundColor: "rgba(87, 55, 252, 0.52)",
  };

  return (
    <div>
      <div className="container justify-content-center mt-5">
        <button style={addButton} className="btn" onClick={addNewRecords}>
          New records
        </button>
        <table ref={tableContainerRef} className="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Todo</th>
              <th scope="col">Comments</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {loggerRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.email}</td>
                <td>{record.name}</td>
                <td>{record.todo}</td>
                <td>{record.comments}</td>
                <td>
                  <button
                    onClick={() => handleEdit(record)}
                    className="btn btn-success"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteModal(record._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal
          className="container mt-5 py-5"
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
        >
          <Modal.Header closeButton style={editHeader}>
            <Modal.Title className="text-white">Edit Record</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3 mt-3">
              <label className="form-label">Email:</label>
              <input
                className="form-control"
                type="text"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                className="form-control"
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">To Do:</label>
              <input
                className="form-control"
                type="text"
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="form-labe;">Comments:</label>
              <input
                className="form-control"
                type="text"
                value={editedComments}
                onChange={(e) => setEditedComments(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn btn-danger"
              onClick={() => setShowEditModal(false)}
            >
              Close
            </Button>
            <Button className="btn btn-success" onClick={handleEditSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          className="container mt-5 py-5"
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
        >
          <Modal.Header closeButton style={deleteHeader}>
            <Modal.Title>Delete Record</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3 mt-3">
              <h5 style={deleteMessageModal}>
                Are you sure you want to delete this?
              </h5>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn btn-danger"
              onClick={() => setShowDeleteModal(false)}
            >
              Close
            </Button>
            <Button className="btn btn-success" onClick={handleDelete}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ShowLogger;
