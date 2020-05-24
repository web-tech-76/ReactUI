import React, { Component, Fragment } from "react";
import {Typography ,TextField, Button,Container,Paper,Divider,FormGroup,Box} from "@material-ui/core";
import UsersService from "../../ApiService/UsersService";

export default class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state=   {
          userName: "",
          password: " ",
          confirmpassword: "",
          firstName: "",
          lastName: " ",
          phonenumber: " ",
          email: " ",
          confirmemail: "",
          address1:  " ",
          address2: " ",
          zip: "" ,
          country:"",
          city: "",
          state: "",
          locale:"",
          thyeme:""
         }
        this.createUser = this.createUser.bind(this); 
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    createUser = async (e) => {
        //e.preventDefault();
     
        let user =  {
          userName : this.state.userName,
          password: this.state.password,
          confirmpassword: this.state.confirmpassword,
          firstName : this.state.firstName,
          lastName : this.state.lastName,
          phonenumber: this.state.phonenumber,
          email : this.state.email,
          confirmemail: this.state.confirmemail,
          address1 :  this.state.address1,
          address2 : this.state.address2,
          zip : this.state.zip,
          country : this.state.country,
          city : this.state.city,
          state : this.state.state,
          locale :this.state.locale,
          thyeme :this.state.thyeme
       };

         await UsersService.createUser(user);
         this.setState( {message : "user Added "});
         this.props.history.push("/users");
    }    

    
    
    render(){
        
        return (
          <Fragment>
          <Container color="primary" maxWidth="xl">
          <Paper fullWidth justify="center">
            <Typography  align="center" variant="h6">New User </Typography>               
            <Divider />
          <Container maxWidth="sm">
          <Paper >
                <TextField  required  autoComplete="new-username" color="primary" fullWidth variant="outlined" margin="dense"  type="text" label="user Name"  name="userName"  onChange={this.onChange} value={this.state.userName}/>
                <TextField  required  autoComplete="new-password" color="primary" fullWidth size="medium" margin="dense" variant="outlined"  type="password" label="password"  name="password" onChange={this.onChange} value={this.state.password} />
                <TextField  required  autoComplete="new-password" color="primary" fullWidth size="medium" margin="dense" variant="outlined"  label="confirm password"  name="confirmpassword" onChange={this.onChange} value={this.state.confirmpassword} />  
                <TextField  required  autoComplete="new-firstName" color="primary" fullWidth variant="outlined" margin="dense" label="first name" type= "text" name="firstName" onChange={this.onChange} value={this.state.firstName} />
                <TextField  required  autoComplete="new-lastName" color="primary" fullWidth variant="outlined" margin="dense" label="last name" type= "text" name="lastName" onChange={this.onChange} value={this.state.lastName} />
                <TextField  required  autoComplete="new-phonenumber" color="primary" fullWidth variant="outlined" margin="dense" label="phonenumber" type= "text" name="phonenumber" onChange={this.onChange} value={this.state.phonenumber} />
                <TextField  required  autoComplete="new-adress1" color="primary" fullWidth variant="outlined" margin="dense"  label="address1" type= "text" name="address1" onChange={this.onChange} value={this.state.address1} />
                <TextField  required  autoComplete="new-address1" color="primary" fullWidth variant="outlined" margin="dense" label="address2"  type= "text" name="address2" onChange={this.onChange} value={this.state.address2} />   
                <TextField  required  autoComplete="new-email" color="primary" fullWidth variant="outlined" margin="dense" type="email"  label="email" name="email" onChange={this.onChange} value={this.state.email} />
                <TextField  required  autoComplete="new-email" color="primary" fullWidth variant="outlined" margin="dense" type="email"  label="confirmEmail" name="confirmemail" onChange={this.onChange} value={this.state.confirmemail} />
                <TextField  required  autoComplete="new-country" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="country" name="country" onChange={this.onChange} value={this.state.country} />
                <TextField  required  autoComplete="new-state" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="state" name="state" onChange={this.onChange} value={this.state.state} />
                <TextField  required  autoComplete="new-city" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="city" name="city" onChange={this.onChange} value={this.state.city} />
                <TextField  required  autoComplete="new-zip" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="zip" name="zip" onChange={this.onChange} value={this.state.zip} />
                <TextField  required  autoComplete="new-locale" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="locale" name="locale" onChange={this.onChange} value={this.state.locale} />
                <TextField  required  autoComplete="new-thyeme" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="thyeme" name="thyeme" onChange={this.onChange} value={this.state.thyeme} />

                <FormGroup row="true" margin="dense">
                  <Box  p={2}>
                      <Button onClick={ () => this.createUser() } margin="dense" variant="contained" color="primary">save </Button>
                   </Box>
                   <Box p={2}>   
                      <Button margin="dense" variant="contained" color="primary">clear </Button>
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
