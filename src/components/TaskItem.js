import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  UPDATE_DONE_TASK,
  DELETE_TASK,
  UPDATE_TASK,
} from "../Redux/constants/actionType";

const TaskItem = ({ task }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedImageUrl, setEditedImageUrl] = useState(task.imageUrl);
  const dispatch = useDispatch();

  const handleDone = (id) => {
    dispatch({ type: UPDATE_DONE_TASK, payload: { id } });
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_TASK, payload: { id } });
  };

  const handleEditModalOpen = () => {
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  const handleEditDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
  };

  const handleEditImageUrlChange = (e) => {
    setEditedImageUrl(e.target.value);
  };

  const handleEditSubmit = () => {
    dispatch({
      type: UPDATE_TASK,
      payload: {
        id: task.id,
        description: editedDescription,
        imageUrl: editedImageUrl,
      },
    });
    setShowEditModal(false);
  };

  return (
    <Card>
      <Card.Body>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={editedImageUrl}
            alt="Task Image"
            style={{ width: "150px", height: "150px", marginRight: "10px" }}
          />

          <div>
            <Card.Text>Description: {task.description}</Card.Text>
          </div>
        </div>

        <button
          className={`btn ${task.done ? "btn-success" : "btn-warning"}`}
          onClick={() => handleDone(task.id)}
        >
          {task.done ? "Done" : "Not Done"}
        </button>

        <Button
          variant="outline-primary"
          onClick={handleEditModalOpen}
          style={{ marginLeft: "5px" }}
        >
          Edit
        </Button>

        <button
          className="btn btn-outline-danger"
          onClick={() => handleDelete(task.id)}
          style={{ marginLeft: "5px" }}
        >
          Delete
        </button>
      </Card.Body>

      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTaskDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={editedDescription}
                onChange={handleEditDescriptionChange}
              />
            </Form.Group>
            <Form.Group controlId="formTaskImageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={editedImageUrl}
                onChange={handleEditImageUrlChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default TaskItem;
