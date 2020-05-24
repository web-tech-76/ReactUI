import React, { Component, Fragment } from "react";
import {Typography ,TextField, Button,Container,Paper,Divider,FormGroup,Box} from "@material-ui/core";
import UsersService from "../../ApiService/UsersService";


export default class EditUSer extends Component {
    constructor(props) {
        super (props);
    
    this.state = {
        
        
        message :  "",
        userName : "",
        password: " ",
        confirmpassword: "",
        firstName : "",
        lastName : " ",
        phonenumber: " ",
        email : " ",
        confirmemail: "",
        address1 :  " ",
        address2 : " ",
        zip : "" ,
        country :"",
        city : "",
        state : "",
        locale :"",
        thyeme :""
    
    }
    
    this.loadUser= this.loadUser.bind(this);
    this.updateUser=this.updateUser.bind(this);
}

componentDidMount(){
    this.loadUser();
}

loadUser()
{
    UsersService.searchByUser(window.localStorage.getItem("userName"))
    .then(
        (res) => 
        { 
            let user = res.data.result ;
        
        this.setState ({
                  userName : user.userName,
                  firstName : user.firstName,
                  lastName : user.lastName,
                  phonenumber : user.phonenumber,
                  email : user.email,
                  password: user.password,
                  address1:  user.address1,
                  address2: user.address2,
                  zip: user.zip ,
                  country: user.zip,
                  city: user.city,
                  state: user.state,
                  locale: user.locale,
                  thyeme: user.thyeme
            }    )

        }
    )
}

onChange = (e) => this.setState({ [e.target.name]: e.target.value });

updateUser = async (e) => {
    
    e.preventDefault();
 
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

    await UsersService.updateUser(user);
    this.setState( {message : "user updated "});
    window.localStorage.setItem("message" , this.state.message);
    this.props.history.push("/users");
} 

render() {

    return (

        <Fragment>
          <Container color="primary" maxWidth="xl">
          <Paper fullWidth justify="center">
            <Typography  align="center" variant="h6">New User </Typography>               
            <Divider />
            <Container maxWidth="sm">
            <Paper>
                <TextField  required  autoComplete="new-uername" color="primary" fullWidth variant="outlined" margin="dense"  type="text" label="userName"  name="userName"  onChange={this.onChange} value={this.state.userName}/>
                <TextField  required  autoComplete="new-password" color="primary" fullWidth size="medium" margin="dense" variant="outlined"  type="password" label="password"  name="password" onChange={this.onChange} value={this.state.password} />
                <TextField  required  autoComplete="new-firstName" color="primary" fullWidth variant="outlined" margin="dense" label="first name" type= "text" name="firstName" onChange={this.onChange} value={this.state.firstName} />
                <TextField  required  autoComplete="new_lastame" color="primary" fullWidth variant="outlined" margin="dense" label="last name" type= "text" name="lastName" onChange={this.onChange} value={this.state.lastName} />
                <TextField  required  autoComplete="new-phonenumber" color="primary" fullWidth variant="outlined" margin="dense" label="phonenumber" type= "text" name="phonenumber" onChange={this.onChange} value={this.state.phonenumber} />
                <TextField  required  autoComplete="new-address1" color="primary" fullWidth variant="outlined" margin="dense"  label="address1" type= "text" name="address1" onChange={this.onChange} value={this.state.address1} />
                <TextField  required  autoComplete="new-address2" color="primary" fullWidth variant="outlined" margin="dense" label="address2"  type= "text" name="address2" onChange={this.onChange} value={this.state.address2} />   
                <TextField  required  autoComplete="new-email" color="primary" fullWidth variant="outlined" margin="dense" type="email"  label="email" name="email" onChange={this.onChange} value={this.state.email} />
                <TextField  required  autoComplete="new-country" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="country" name="country" onChange={this.onChange} value={this.state.country} />
                <TextField  required  autoComplete="new-state" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="state" name="state" onChange={this.onChange} value={this.state.state} />
                <TextField  required  autoComplete="new-city" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="city" name="city" onChange={this.onChange} value={this.state.city} />
                <TextField  required  autoComplete="new-zip" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="zip" name="zip" onChange={this.onChange} value={this.state.zip} />
                <TextField  required  autoComplete="new-locale" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="locale" name="locale" onChange={this.onChange} value={this.state.locale} />
                <TextField  required  autoComplete="new-thyeme" color="primary" fullWidth variant="outlined" margin="dense" type="text"  label="thyeme" name="thyeme" onChange={this.onChange} value={this.state.thyeme} />

                <FormGroup row="true" margin="dense">
                  <Box  p={2}>
                      <Button type="submit" onClick={this.updateUser} margin="dense" variant="contained" color="primary">save </Button>
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