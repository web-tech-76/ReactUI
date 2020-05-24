import React, { Component, Fragment } from "react";
import RoleService from "../../ApiService/RoleService";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import {Table, Paper, TableCell,TableRow,TableHead,TableBody, Box, Typography, Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default class Roles extends Component {
  constructor(props) {
    
    super(props);
    
    this.state ={
      roles : [],
      message : null,

    }
     
    this.reloadRoleList = this.reloadRoleList.bind(this);
    this.addRole = this.addRole.bind(this);
    this.editRole = this.editRole.bind(this);
    this.deleteRole= this.deleteRole.bind(this);
  }
  

  componentDidMount(){
      this.reloadRoleList();
  }

  reloadRoleList = async () => {
        let res = await RoleService.searchAll();
        this.setState( { roles : res.data.result } );
        if(null !=window.localStorage.getItem("message")){
          this.setState( { message : window.localStorage.getItem("message")});
        }
        else{
          this.setState( { message : res.data.message});
        }
  }

  addRole()
  {
    window.localStorage.removeItem("roleId");  
    this.props.history.push("/addrole");
  }

  editRole(roleId){
    window.localStorage.setItem("roleId", roleId);
    this.props.history.push("/editrole");
  }

  deleteRole = async (roleId) =>  {
    let result= await RoleService.delete(roleId);
    this.setState({ message: result.data.message} );

    let res = await RoleService.searchAll();
    this.setState( { roles : res.data.result } );
  }


  render() {
    return (
      <Fragment>
        <Container color="primary" maxWidth="xl">
                  <Paper elevation={3}>
                      <Typography   align="center" variant="h6">Roles </Typography>
                      <Button variant="outlined" color="primary" onClick={() => this.addRole()}><Typography variant="overline">Create</Typography></Button>
                      <Box>
                          <Typography color="secondary" variant="caption">{this.state.message}</Typography>
                      </Box>
                  </Paper>
                  <Paper elevation={3} >
                  <Table>
                      <TableHead>
                        <TableRow  >
                            <TableCell  align="left" ><Typography color="secondary" variant="caption">Id</Typography></TableCell>
                            <TableCell align="left" ><Typography color="secondary" variant="caption">Role Name</Typography></TableCell>
                            <TableCell align="left" ><Typography color="secondary" variant="caption">Description</Typography></TableCell>
                            <TableCell align="left" >edit</TableCell>
                            <TableCell align="left" >delete</TableCell>
                        </TableRow>
                        
                    </TableHead>
                  
                    <TableBody>
                        {this.state.roles.map(
                          (row) => (
                            <TableRow  key={row.roleId}>
                                <TableCell  align="left"  component="th" scope="row"><Typography variant="caption">{row.roleId}</Typography></TableCell>
                                <TableCell align="left" ><Typography variant="caption">{row.roleName}</Typography></TableCell>
                                <TableCell align="left" ><Typography variant="caption">{row.description}</Typography></TableCell>
                                <TableCell align="left" onClick={() => this.editRole(row.roleId)}><CreateIcon /></TableCell>
                                <TableCell  align="left" onClick={() => this.deleteRole(row.roleId)}><DeleteIcon /></TableCell>
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