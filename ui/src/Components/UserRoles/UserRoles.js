import React, { Component, Fragment } from "react";
import UserRoleService from "../../ApiService/UserRoleService";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import {Table, Paper, TableCell,TableRow,TableHead,TableBody, Box, Typography, Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default class UserRoles extends Component {
  constructor(props) {
    
    super(props);
    
    this.state ={
      userroles : [],
      message : null,

    }
     
    this.reloadUserRoleList = this.reloadUserRoleList.bind(this);
    this.addUserRole = this.addUserRole.bind(this);
    this.editUserRole = this.editUserRole.bind(this);
    this.deleteUserRole= this.deleteUserRole.bind(this);
  }
  

  componentDidMount(){
      this.reloadUserRoleList();
  }

  reloadUserRoleList = async () => {
        let res = await UserRoleService.searchAll();
        this.setState( { userroles : res.data.result } );
        if(null !=window.localStorage.getItem("message")){
          this.setState( { message : window.localStorage.getItem("message")});
        }
        else{
          this.setState( { message : res.data.message});
        }
  }

  addUserRole()
  {
    window.localStorage.removeItem("userroleId");  
    this.props.history.push("/adduserrole");
  }

  editUserRole(userroleId){
    window.localStorage.setItem("userroleId", userroleId);
    this.props.history.push("/edituserrole");
  }

  deleteUserRole = async (userroleId) =>  {
    let result= await UserRoleService.delete(userroleId);
    this.setState({ message: result.data.message} );

    let res = await UserRoleService.searchAll();
    this.setState( { userroles : res.data.result } );
  }

  render() {
    return (
      <Fragment>
        <Container color="primary" maxWidth="xl">
                  <Paper elevation={3}>
                      <Typography   align="center" variant="h6">User Roles </Typography>
                      <Button variant="outlined" color="primary" onClick={() => this.addUserRole()}><Typography variant="overline">Create</Typography></Button>
                      <Box>
                          <Typography color="secondary" variant="caption">{this.state.message}</Typography>
                      </Box>
                  </Paper>
                  <Paper elevation={3} >
                  <Table>
                      <TableHead>
                        <TableRow  >
                            <TableCell  align="left" ><Typography color="secondary" variant="caption">User Id</Typography></TableCell>
                            <TableCell align="left" ><Typography color="secondary" variant="caption">Role Id</Typography></TableCell>
                            <TableCell align="left" >edit</TableCell>
                            <TableCell align="left" >delete</TableCell>
                        </TableRow>
                        
                    </TableHead>
                  
                    <TableBody>
                        {this.state.userroles.map(
                          (row) => (
                            <TableRow  key={row.userId}>
                                <TableCell  align="left"  component="th" scope="row"><Typography variant="caption">{row.userId}</Typography></TableCell>
                                <TableCell align="left" ><Typography variant="caption">{row.roleId}</Typography></TableCell>
                                
                                <TableCell align="left" onClick={() => this.editRole(row.userId)}><CreateIcon /></TableCell>
                                <TableCell  align="left" onClick={() => this.deleteRole(row.userId)}><DeleteIcon /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </Paper>
            </Container>
          </Fragment>  
    );
  }
}