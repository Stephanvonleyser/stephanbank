import React, { useContext, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from './context'; // Ensure the path is correct

function Deposit() {
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('');
    const ctx = useContext(UserContext);

    function validateForm() {
        return amount > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const currentUser = ctx.currentUser;
        if (currentUser) {
            currentUser.balance += Number(amount);
            setStatus(`$${amount} has been deposited.`);
            // Perform any additional actions or updates
            setTimeout(() => setStatus(''), 3000);
        } else {
            setStatus('Error: Unable to find user');
            setTimeout(() => setStatus(''), 3000);
        }
    }

    return (
        <Card bg="primary" text="white" style={{ width: '18rem' }} className="mb-2">
            <Card.Header>Deposit</Card.Header>
            <Card.Body>
                {status && (
                    <Alert variant="success" onClose={() => setStatus('')} dismissible>
                        <p>{status}</p>
                    </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Deposit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Deposit;