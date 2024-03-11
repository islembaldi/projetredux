import React, { useState } from "react";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { ADD_TASK } from "../Redux/constants/actionType";

const Addtask = () => {
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  const dispatch = useDispatch();
  const handleAddTask = () => {
    dispatch({ type: ADD_TASK, payload: description });
  };

  return (
    <div>
      <Form>
        <Container>
          <InputGroup>
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="Type your task ..."
              onChange={handleChange}
            />
            <Button variant="success" onClick={handleAddTask}>
              Add task
            </Button>
          </InputGroup>
        </Container>
      </Form>
    </div>
  );
};

export default Addtask;
