import React, { Component, Fragment } from "react";
import ApplicationHeader from "./Components/Header/ApplicationHeader";
import LoginAppHeader from "./Components/Header/LoginAppHeader";
import Routers from "./Components/Routers/Routers";

function appheader(){

  return (
      <ApplicationHeader />
    );
 } 

 function loginheader(){

  return (
      <LoginAppHeader />
    );
 } 


export default class App extends Component {

   render() {
    let token = window.localStorage.getItem("token");

    let header;

    if(token === null)
    {
      header= appheader();
    }
    
    else{
      header =loginheader();
    }  
    return (
        
        <Fragment>
          { header }
          <Routers />
        </Fragment>
      );
  }
}
