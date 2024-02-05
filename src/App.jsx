import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Navbar'
import UsersExtract from './UsersExtract'
import UserImpacted from './UserImpacted'
import UserCreate from './UserCreate'
import UserUpdate from './UserUpdate'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
      
        <Switch>
          <Route exact path='/' component={UsersExtract} />
          <Route exact path='/UsersExtract' component={UsersExtract} />
          <Route exact path='/UserImpacted' component={UserImpacted} />
          <Route exact path='/create' component={UserCreate} />
          <Route exact path='/update/:id' component={UserUpdate} />
        </Switch>
      </div>
    </Router>
  );
}
