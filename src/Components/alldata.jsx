import React, { useContext } from 'react';
import { UserContext } from './context'; // Ensure the path is correct
import { Card as BootstrapCard } from 'react-bootstrap';

function AllData(){
    const ctx = useContext(UserContext);

    return (
        <>
            <h5>All Data in Store</h5>
            {ctx.users.map((user, index) => (
                <BootstrapCard key={index} bg="light" style={{ width: '18rem' }} className="mb-2">
                    <BootstrapCard.Header>{user.name}</BootstrapCard.Header>
                    <BootstrapCard.Body>
                        <BootstrapCard.Text>Name: {user.name}</BootstrapCard.Text>
                        <BootstrapCard.Text>Email: {user.email}</BootstrapCard.Text>
                        <BootstrapCard.Text>Password: {user.password}</BootstrapCard.Text>
                        <BootstrapCard.Text>Balance: ${user.balance}</BootstrapCard.Text>
                    </BootstrapCard.Body>
                </BootstrapCard>
            ))}
        </>
    );
}

export default AllData;