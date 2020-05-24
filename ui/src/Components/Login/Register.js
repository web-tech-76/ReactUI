import React, { Component, Fragment } from "react";
import {  Button, TextField, Typography, Divider,Modal, Fab, Box, Paper, Grid  } from "@material-ui/core";
import LoginService from "../../ApiService/LoginService";

import CloseIcon from '@material-ui/icons/Close';

export default class Register extends Component{
    constructor(props) {
        super(props);
        

        this.state = {
          open: true,
          setOpen: true,
          username: "",
          password: "",
          email: "",
          phone : "",
          message: '',
          result: null
        };
        
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }    

    componentDidMount(){


    }


    authenticate= async(e) =>
    {//
        //alert(this.state.username + this.state.password);
        let credentials ={
          username : this.state.username,
          password: this.state.password
        } 

        let res = await LoginService.authenticate(credentials);
        this.setState( {result : res});
         
        
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleClickOpen() {
        this.setState({ open: true, setOpen: true });
    }
    
    handleClose() {
        this.setState({ open: false, setOpen: false });
    }

render(){

return(
  
      <Fragment>
             
        <Modal   style={{  marginTop: "7%", marginLeft: "35%", width:"25%", align:"center"  } } hideBackdrop open={this.state.open} onClose={() => this.handleClose()} >
          <Fragment>
          <Box borderColor="primary.main" boxShadow={1} bgcolor="background.paper">
          <Paper elevation={3}  >
              <Grid style={{background:"blue"}} container justify="flex-end" >
                  <Grid Item>    
                    <Fab onClick={ () => this.handleClose() } size="small" color="primary" aria-label="close">
                        <CloseIcon />
                    </Fab>
               </Grid>     
               </Grid>
            </Paper>     
            <p></p>
             <Box>
               <Typography  align="center" varant="subtitle2" color="initial"> User Registration </Typography> 
                
              <Divider />
              <TextField style={ { margin:"20px" , width:"70%"}} margin="dense"  label="UserName" variant="outlined" name="username"  onChange={this.onChange} value={this.state.username}   />
              <br />
              <TextField style={ { margin:"20px" , width:"70%"}} margin="dense" name="password" variant="outlined"  onChange={this.onChange} value={this.state.password} label="password" type="password" />
              <br />
              <TextField  style={ { margin:"20px" , width:"70%"}} margin="dense"  variant="outlined" name="phone"  onChange={this.onChange} value={this.state.phone}  label="phone" />
              <br />
              <TextField  style={ { margin:"20px" , width:"70%"}} margin="dense"  variant="outlined" name="email"  onChange={this.onChange} value={this.state.email}  label="email" />
              <Divider />
              <Box >               
                  <Button style ={ { margin :"20px" , textTransform:"none"}} onClick={ () => this.authenticate() } color="primary" variant="contained" ><Typography variant="caption">Register</Typography></Button>
                  <Button style ={ { margin :"10px", textTransform:"none"}} variant="contained" color="primary"><Typography variant="caption">Clear</Typography></Button>
                </Box>
              </Box>  
            </Box> 
            </Fragment>
        </Modal>
        
        </Fragment>
  

);


}



}