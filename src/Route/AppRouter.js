import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home'
import MemberProfile from '../pages/MemberProfile'

const AppRouter = () => (
    <div className="page-container">
      <BrowserRouter>
        <div className="page-container">
          <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/member/:id" exact={true} component={MemberProfile} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
);
  
export default AppRouter;