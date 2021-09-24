import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddDocument from "../pages/AddDocument";
import AddMember from "../pages/AddMember";
import Home from "../pages/Home";
import MemberProfile from "../pages/MemberProfile";

const AppRouter = () => (
  <div className="page-container">
    <BrowserRouter>
      <div className="page-container">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/member/:id" exact={true} component={MemberProfile} />
          <Route path="/addMember" exact={true} component={AddMember} />
          <Route path="/addDocument" exact={true} component={AddDocument} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default AppRouter;
