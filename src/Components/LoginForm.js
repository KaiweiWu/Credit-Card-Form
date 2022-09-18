import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginForm = ({onLogin}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return userName.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    onLogin({userName});
  }

  return (
    <div className="child-container">
      <Form onSubmit={handleSubmit}>
          <Form.Group size="lg">
          <Form.Label>Username</Form.Label>
          <Form.Control
              autoFocus
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
          />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          </Form.Group>
          <Button size="md" type="submit" disabled={!validateForm()}>Login</Button>
      </Form>
    </div>
  );
}

export default LoginForm;
