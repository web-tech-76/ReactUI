import React, { Component, Fragment } from "react";
import UsersService from "../../ApiService/UsersService";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {Table, Fab,Paper, TableCell,TableRow,TableHead,TableBody, Box, Typography, Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export default class Users extends Component {
  constructor(props) {
    
    super(props);
    
    this.state ={
      users : [],
      message : null,

    }
     
    this.reloadUsersList = this.reloadUsersList.bind(this);
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser= this.deleteUser.bind(this);
  }
  

  componentDidMount(){
      this.reloadUsersList();
  }

  reloadUsersList = async () => {
        let res = await UsersService.searchAll();
       this.setState( { users : res.data.result } );
        
        if(null !=window.localStorage.getItem("message")){
          this.setState( { message : window.localStorage.getItem("message")});
        }
        else{
          this.setState( { message : res.data.message});
        }
  }

  addUser()
  {
    window.localStorage.removeItem("userName");  
    this.props.history.push("/adduser");
  }

  editUser(userName){
    window.localStorage.setItem("userName", userName);
    this.props.history.push("/edituser");
  }

  deleteUser = async (userName) =>  {
    await UsersService.deleteUser(userName);
    this.setState({ message: "user deleted"} );
    //this.setState({users: this.state.users.filter(user => user.userName !== userName)});
    let res = await UsersService.searchAll();
    this.setState( { users : res.data.result } );
  }


  render() {
    return (
      <Fragment>
          <Container color="primary" maxWidth="xl">
                  <Paper elevation={3}>
                      <Typography   align="center" variant="h6">User Details</Typography>
                      <Button variant="outlined" color="primary" onClick={() => this.addUser()}>
                            <Fab size="small" color="primary" aria-label="add" >
                              <AddIcon />
                            </Fab>
                       </Button>     
                      <Box>
                          <Typography color="secondary" variant="caption">{this.state.message}</Typography>
                      </Box>
                  </Paper>
                  <Paper elevation={3} >
                  <Table>
                      <TableHead>
                        <TableRow  >
                            <TableCell  align="left" ><Typography color="secondary" variant="caption">Id</Typography></TableCell>
                            <TableCell align="left" ><Typography color="secondary" variant="caption">First</Typography></TableCell>
                            <TableCell align="left" ><Typography color="secondary" variant="caption">Last</Typography></TableCell>
                            <TableCell align="left" ><Typography color="secondary" variant="caption">Phone</Typography></TableCell>
                            <TableCell align="left" ><Typography color="secondary" variant="caption">@</Typography></TableCell>
                            <TableCell align="left" ><Typography color="secondary" variant="caption">Locale</Typography></TableCell>
                            <TableCell align="left" ><Typography color="secondary" variant="caption">Thyeme</Typography></TableCell>
                            <TableCell align="left" ><Typography color="secondary" variant="caption">Address</Typography></TableCell>
                            <TableCell align="left" >edit</TableCell>
                            <TableCell align="left" >delete</TableCell>
                        </TableRow>
                        
                    </TableHead>
                  
                    <TableBody>
                        {this.state.users.map(
                          (row) => (
                            <TableRow  key={row.userName}>
                                <TableCell  align="left"  component="th" scope="row"><Typography variant="caption">{row.userName}</Typography></TableCell>
                                <TableCell align="left" ><Typography variant="caption">{row.firstName}</Typography></TableCell>
                                <TableCell align="left" ><Typography variant="caption">{row.lastName}</Typography></TableCell>
                                <TableCell align="left" ><Typography variant="caption">{row.phonenumber}</Typography></TableCell>
                                <TableCell ><Typography variant="caption">{row.email}</Typography></TableCell>
                                <TableCell ><Typography variant="caption">{row.locale}</Typography></TableCell>
                                <TableCell ><Typography variant="caption">{row.thyeme}</Typography></TableCell>
                                <TableCell align="left" ><Typography variant="caption">{row.address1}{" "}{row.address2}{" "}{row.state}{" "}{row.city}{" "}{row.zip}{" "}{row.country}</Typography></TableCell>
                                <TableCell align="left" onClick={() => this.editUser(row.userName)}>
                                <Fab size="small" color="primary" aria-label="edit">
                                    <EditIcon />
                                 </Fab>
                                </TableCell>
                                <TableCell  align="left" onClick={() => this.deleteUser(row.userName)}>
                                <Fab size="small" color="primary" aria-label="edit">
                                    <DeleteIcon />
                                 </Fab>
                                
                                </TableCell>
                                
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