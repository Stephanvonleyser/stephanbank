import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './Components/navbar';
import Home from './Components/home';
import CreateAccount from './Components/createaccount';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import AllData from './Components/alldata';
import Login from './Components/login';

function App() {
  return (
      <Router>
          <NavBar />
          <Container>
              <Routes>
                  <Route path="/" element={<Home />} index /> {/* Set the 'index' attribute */}
                  <Route path="/createaccount" element={<CreateAccount />} />
                  <Route path="/deposit" element={<Deposit />} />
                  <Route path="/withdraw" element={<Withdraw />} />
                  <Route path="/alldata" element={<AllData />} />
                  <Route path="/login" element={<Login />} />
                  {/* Add any other routes here */}
              </Routes>
          </Container>
      </Router>
  );
}

export default App;