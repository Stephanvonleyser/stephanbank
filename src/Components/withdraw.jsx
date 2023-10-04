import React, { useContext, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { UserContext } from './context'; // Ensure the path is correct

function Withdraw() {
    const [amount, setAmount] = useState('');
    const [status, setStatus] = useState('');
    const ctx = useContext(UserContext);

    function validateForm() {
        return amount > 0 && ctx.currentUser && Number(amount) <= ctx.currentUser.balance;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (ctx.currentUser) {
            ctx.currentUser.balance -= Number(amount);
            setStatus(`$${amount} has been withdrawn.`);
            setTimeout(() => setStatus(''), 3000);
        } else {
            setStatus('Error: Unable to find user');
            setTimeout(() => setStatus(''), 3000);
        }
    }

    return (
        <Card bg="primary" text="white" style={{ width: '18rem' }} className="mb-2">
            <Card.Header>Withdraw</Card.Header>
            <Card.Body>
                {status && (
                    <Alert variant={status.startsWith('Error') ? "danger" : "success"} onClose={() => setStatus('')} dismissible>
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
                        Withdraw
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Withdraw;