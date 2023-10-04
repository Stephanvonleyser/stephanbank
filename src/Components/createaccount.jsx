import React, { useContext, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from './context'; 

function CreateAccount() {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

    function validate(field, label) {
        if (!field) {
            setStatus(`Error: ${label} is required`);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        if (label === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field)) {
                setStatus('Error: Email format is invalid');
                setTimeout(() => setStatus(''), 3000);
                return false;
            }
        }
        if (label === 'password' && field.length <= 7) {
            setStatus('Error: Password must be at least 8 characters long');
            setTimeout(() => setStatus(''), 3000);
            return false;
            
        }
        return true;
    }

    function handleCreate(e) {
        e.preventDefault();
        if (!validate(name, 'name') || !validate(email, 'email') || !validate(password, 'password')) {
            return;
        }
        // Check if email already exists
        const existingUser = ctx.users.find((user) => user.email === email);
        if (existingUser) {
            setStatus('Error: Email already in use');
            setTimeout(() => setStatus(''), 3000);
            return;
        }
        ctx.createUser(name, email, password); // Use the createUser function from context
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card bg="primary" text="white" style={{ width: '18rem' }} className="mb-2">
            <Card.Header>Create Account</Card.Header>
            <Card.Body>
                {status && (
                    <Alert variant="danger" onClose={() => setStatus('')} dismissible>
                        <p>{status}</p>
                    </Alert>
                )}
                {show ? (
                    <Form onSubmit={handleCreate}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="light" type="submit">
                            Create Account
                        </Button>
                    </Form>
                ) : (
                    <>
                        <Card.Text>Account created successfully!</Card.Text>
                        <Button variant="light" onClick={clearForm}>
                            Add another account
                        </Button>
                    </>
                )}
            </Card.Body>
        </Card>
    );
}

export default CreateAccount;