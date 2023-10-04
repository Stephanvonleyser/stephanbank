import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './Components/navbar';
import Home from './Components/home';
import CreateAccount from './Components/createaccount';
import Deposit from './Components/deposit';
import Withdraw from './Components/withdraw';
import AllData from './Components/alldata';
import Login from './Components/login';
// Import other components as needed

function App() {
  return (
      <Router>
          <NavBar />
          <Container>
              <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/createaccount" component={CreateAccount} />
                  <Route path="/deposit" component={Deposit} />
                  <Route path="/withdraw" component={Withdraw} />
                  <Route path="/alldata" component={AllData} />
                  <Route path="/login" component={Login} />
                  {/* Add any other routes here */}
              </Switch>
          </Container>
      </Router>
  );
}

export default App;