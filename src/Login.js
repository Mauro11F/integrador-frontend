import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  const [nickname, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${nickname}, Password: ${password}`);
  };

  return (
    <>
      <div class="container">
        <div class="abs-center">
          <div class="card">
            <img src="../img/Login.png" class="card-img" alt="img" />
            <div class="card-img-overlay">
              <Form onSubmit={handleSubmit} id="izq">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Nickname</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nickname"
                    value={nickname}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
