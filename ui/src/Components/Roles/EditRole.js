import React, { Component, Fragment } from "react";
import {Typography ,TextField, Button,Container,Paper,Divider,FormGroup,Box} from "@material-ui/core";
import RoleService from "../../ApiService/RoleService";


export default class EditUSer extends Component {
    constructor(props) {
        super (props);
    
    this.state = {
        message :  "",
        roleId : "",
        roleName: " ",
        description: ""
    }
    
    this.loadRoles= this.loadRoles.bind(this);
    this.updateRole=this.updateRole.bind(this);
}

componentDidMount(){
    this.loadRoles();
}

loadRoles()
{
    RoleService.searchByRole(window.localStorage.getItem("roleId"))
    .then(
        (res) => 
        { 
            let role = res.data.result ;
        
        this.setState ({
                  roleId : role.roleId,
                  roleName : role.roleName,
                  description : role.description
                }    )

        }
    )
}

onChange = (e) => this.setState({ [e.target.name]: e.target.value });

updateRole = async (e) => {
    
    e.preventDefault();
 
    let role =  {
      roleId : this.state.roleId,
      roleName: this.state.roleName,
      description: this.state.description
   };

    await RoleService.update(role);
    this.setState( {message : "role updated "});
    window.localStorage.setItem("message" , this.state.message);
    this.props.history.push("/roles");
} 

render() {

    return (

        <Fragment>
          <Container color="primary" maxWidth="xl">
          <Paper fullWidth justify="center">
            <Typography  align="center" variant="h6">Edit Role </Typography>               
            <Divider />
            <Container maxWidth="sm">
            <Paper>
                <TextField  required  autoComplete="new-roleId" color="primary" fullWidth variant="outlined" margin="dense"  type="text" label="role Id"  name="roleId"  onChange={this.onChange} value={this.state.roleId}/>
                <TextField  required  autoComplete="new-roleName" color="primary" fullWidth variant="outlined" margin="dense" label="role Name" type= "text" name="roleName" onChange={this.onChange} value={this.state.roleName} />
                <TextField  required  autoComplete="new-description" color="primary" fullWidth variant="outlined" margin="dense" label="description" type= "text" name="description" onChange={this.onChange} value={this.state.description} />
                
                <FormGroup row="true" margin="dense">
                  <Box  p={2}>
                      <Button type="submit" onClick={this.updateRole} margin="dense" variant="contained" color="primary">save </Button>
                   </Box>
                   <Box p={2}>   
                      <Button  type="reset" margin="dense" variant="contained" color="primary">clear </Button>
                  </Box>
                </FormGroup>
          </Paper>        
          </Container>          
          </Paper>
        </Container>
        </Fragment>       
    )


}


}