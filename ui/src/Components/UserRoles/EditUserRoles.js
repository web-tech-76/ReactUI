import React, { Component, Fragment } from "react";
import { Container, FormGroup, Button, Box, Typography } from "@material-ui/core";
import UserRoleService from "../../ApiService/UserRoleService";
import {
  Paper,
  Select,
  FormControl,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import classes from "classnames";

export default class EditUSerRoles extends Component {
  state = {
    useroptions: [],
    roles: [],

    selecteduserId: null,
    roleId: null
  };

  onChange = event => {
    this.setState({
      selecteduserId: event.target.value,
      name: event.target.name
    });
    console.log("Selected User Option : " + this.state.selecteduserId);
  };

  onRolesChange = event => {
    this.setState({ roleId: event.target.value, name: event.target.name });

    console.log("Selected Role Option: " + this.state.roleId);
  };

  componentDidMount() {
    this.loadUsers();
    this.loadRoles();
  }

  loadUsers = async () => {
    let res = await UserRoleService.getUsers();
    this.setState({ useroptions: res.data.result });
    console.log(this.state.users);
  };

  loadRoles = async () => {
    let res = await UserRoleService.getRoles();
    this.setState({ roles: res.data.result });
  };

  render() {
    return (
      <Fragment>
      <p></p>
      <Container maxWidth="sm">
       <Paper fullWidth justify="center">
          <Typography  align="center" variant="h6">New User Role </Typography>               
          <p></p>
        <Container maxWidth="xs">

          <Paper style={{ border: "1" }} elevation={1}>
            <FormControl className={classes.formControl}  fullWidth   variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">user</InputLabel>
              <Select color="primary"  margin="dense" fullWidth variant="outlined" value={this.state.selecteduserId} onChange={this.onChange}
                label="users"
              >
                <MenuItem value=""><Typography variant="caption">None</Typography></MenuItem>
                {this.state.useroptions.map((user, index) => (
                  <MenuItem key={index} value={user.label} name={user.value}><Typography variant="caption"> {user.label} {"-"} {user.value}</Typography></MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
          <p></p>
          <Paper elevation={1}>
            <FormControl style={ {borderSpacing:'2' }} fullWidth variant="standard">
              <InputLabel id="roles-label"></InputLabel>
              <Select margin="dense" fullWidth variant="outlined" value={this.state.roleId} onChange={this.onRolesChange} label="roles">
                <MenuItem value=" "><em>None</em></MenuItem>
                {this.state.roles.map((role, index) => 
                (
                  <MenuItem key={index} value={role.roleId} name={role.roleId}>{role.roleId} {"-"} {role.roleName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
        
          <FormGroup row="true" margin="dense">
                  <Box  p={2}>
                      <Button  margin="dense" variant="contained" color="primary">save </Button>
                   </Box>
                   <Box p={2}>   
                      <Button margin="dense" variant="contained" color="primary">clear </Button>
                  </Box>
          </FormGroup>        
           
     </Container>
     </Paper>
     </Container> 
    </Fragment>
    );
  }
}
