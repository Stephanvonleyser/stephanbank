
import React, { createContext, useState } from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';

export const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    function createUser(name, email, password) {
        setUsers([...users, { name, email, password, balance: 100 }]);
    }

    function loginUser(email, password) {
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            setCurrentUser(user);
            return true; // login successful
        } else {
            return false; // login failed
        }
    }

    function logoutUser() {
        setCurrentUser(null);
    }

    return (
        <UserContext.Provider value={{ users, createUser, currentUser, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
}

function Card(props) {
    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }

    return (
        <div className={classes()} style={{ maxWidth: "18rem" }}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
}

export default Card;