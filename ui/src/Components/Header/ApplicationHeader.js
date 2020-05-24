import React, { Component, Fragment } from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
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

export default class ApplicationHeader extends Component {
  constructor(props){
      super(props);

      this.forwardto= this.forwardto.bind(this);
      
    }
  
  forwardto()
  {
    window.localStorage.removeItem("userName");  
    this.props.history.push("/adduser");
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
                 {/* <Button  color="inherit" href="/adduser" ><Typography  variant="caption">register</Typography></Button> 
                  <Button  color="inherit" href="/uploaddir"><Typography  variant="caption">upload dir</Typography></Button> 
                 <Button  color="inherit" href="/uploadmulti"><Typography  variant="caption">upload multi</Typography></Button> 
                 */
                 }
                 <Button  color="inherit" href="/uploadsingle"><Typography  variant="caption">upload </Typography></Button> 
                 <Button  color="inherit" href="/"><Typography  variant="caption">login</Typography></Button> 
               </ButtonGroup>  
             </Toolbar>
          </AppBar>
          
        </Container>
      </Fragment>
    );
  }
}
