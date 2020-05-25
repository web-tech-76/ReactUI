import React ,{Component} from "react";
import {BrowserRouter as  Router, Switch, Route} from "react-router-dom";
//const  Users = lazy(()=> import ("./Users/Users" ));
import Users from "./Users";

export default class Routers extends Component {
    render(){
     return( 
    <Router>
      <div >
        <Switch>
          <Route path="/" exact component={Users}/>
      </Switch>
     </div>
    </Router>
    );
    }
}