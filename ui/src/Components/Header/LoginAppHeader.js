import React, { Component, Fragment } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: "auto"
  },
  title: {
    flexGrow: 1
  },
  toolbarButtons: {
    marginLeft: '16',
  },
}));

export default class LoginAppHeader extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      open: false,
      setOpen: false,
      
    };
    
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.forwardto= this.forwardto.bind(this);
  }
  forwardto()
  {
    window.localStorage.removeItem("userName");  
    this.props.history.push("/adduser");
  }
  handleClickOpen() {
    this.setState({ open: true, setOpen: true });
  }
  handleClose() {
    this.setState({ open: false, setOpen: false });
  }
  render() {
    return (
    <Fragment>
       <Container maxWidth="xl">
          <AppBar  position="relative">
              <Toolbar variant="regular" style={ { marginLeft: '10', marginRight: 'auto' } }>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
                <Typography variant="subtitle1" className={classes.title}>My Application</Typography>
              </IconButton>
              <ButtonGroup variant="text" >
                 <Button  color="inherit" href="/" ><Typography  variant="caption">home</Typography></Button> 
                 <Button  color="inherit" href="/roles" ><Typography  variant="caption">roles</Typography></Button> 
                 <Button  color="inherit" href="/userroles" ><Typography  variant="caption">user roles</Typography></Button> 
                 <Button  color="inherit" href="/adduser" ><Typography  variant="caption">register</Typography></Button> 
                 <Button  color="inherit" onClick={() => this.handleClickOpen()} ><Typography  variant="caption">login</Typography></Button> 
               </ButtonGroup>  
             </Toolbar>
          </AppBar>
          <Dialog  maxWidth="sm"  open={this.state.open} onClose={() => this.handleClose()} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">User Login </DialogTitle>
            <DialogContent>
              <TextField autoFocus margin="dense"  id="username"  label="UserName" fullWidth/>
              <br />
              <TextField margin="dense" id="password" label="password" type="password"  fullWidth/>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.handleClose()} color="primary">Login</Button>
              <Button onClick={() => this.handleClose()} color="primary">Clear</Button>
            </DialogActions>
          </Dialog>
        </Container>
      </Fragment>
    );
  }
}
