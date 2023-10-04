import React, { useContext, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from './context'; // Ensure the path is correct

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const ctx = useContext(UserContext);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const user = ctx.users.find((user) => user.email === email && user.password === password);
        if (ctx.loginUser(email, password)) {
            setStatus('Login Successful');
            // Perform any additional actions on successful login
            setTimeout(() => setStatus(''), 3000);
        } else {
            setStatus('Invalid email or password');
            setTimeout(() => setStatus(''), 3000);
        }
    }

    return (
        <Card bg="primary" text="white" style={{ width: '18rem' }} className="mb-2">
            <Card.Header>Login</Card.Header>
            <Card.Body>
                {status && (
                    <Alert variant={status === 'Login Successful' ? "success" : "danger"} onClose={() => setStatus('')} dismissible>
                        <p>{status}</p>
                    </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;