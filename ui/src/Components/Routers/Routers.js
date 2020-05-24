import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "../Users/Users";
import AddUser from "../Users/AddUser";
import EditUser from "../Users/EditUser";
import Roles from "../Roles/Roles";
import AddRole from "../Roles/AddRole";
import EditRole from "../Roles/EditRole";
import UserRoles from "../UserRoles/UserRoles";
import AddUserRoles from "../UserRoles/AddUserRoles";
import Login from "../Login/Login";
import { UploadMultiple, UploadSingle, UploadDir } from "../Upload";
import Download from "../Download/Download";
import Register from "../Login/Register";
import Home from "../Home/Home";

export default class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/uploadmulti" exact component={UploadMultiple} />
            <Route path="/uploadsingle" exact component={UploadSingle} />
            <Route path="/uploaddir" exact component={UploadDir} />
            <Route path="/download" exact component={Download} />
            <Route path="/login" exact component={Login} />
            <Route path="/users" exact component={Users} />
            <Route path="/adduser" component={AddUser} />
            <Route path="/edituser" component={EditUser} />
            <Route path="/roles" exact component={Roles} />
            <Route path="/addrole" component={AddRole} />
            <Route path="/editrole" component={EditRole} />
            <Route path="/userroles" exact component={UserRoles} />
            <Route path="/adduserrole" exact component={AddUserRoles} />
          </Switch>
        </div>
      </Router>
    );
  }
}
