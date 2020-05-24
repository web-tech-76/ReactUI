import React, { Component } from "react";
import {
  Dialog,
  Button,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Divider,
  Link,
  Paper,
} from "@material-ui/core";
import LoginService from "../../ApiService/LoginService";
import { storeToken } from "../../ApiService/Token";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      setOpen: true,
      username: "",
      password: "",
      message: "",
      result: null,
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  authenticate = async (e) => {
    //alert(this.state.username + this.state.password);
    let jwtUser = {
      username: this.state.username,
      password: this.state.password,
      email: "",
      phone: 0,
    };

    let res = await LoginService.authenticate(jwtUser);

    if (res.data.status === 200) {
      //window.localStorage.setItem("token", res.data.token);

      storeToken(res.data.token);

      this.setState({ message: res.data.message });
      this.setState({ open: false, setOpen: false });

      this.setState({
        result: res.data.result,
      });

      this.props.history.push("/home");
    } else {
      alert(res.data.message);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleClickOpen() {
    this.setState({ open: true, setOpen: true });
  }

  handleClose() {
    this.setState({ open: false, setOpen: false });
  }

  render() {
    return (
      <Dialog
        fullWidth
        maxWidth={"sm"}
        open={this.state.open}
        onClose={() => this.handleClose()}
      >
        <DialogTitle id="form-dialog-title">
          <Typography variant="inherit">User Login</Typography>
        </DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="username"
            onChange={this.onChange}
            value={this.state.username}
            label="UserName"
            fullWidth
          />
          <br />
          <TextField
            margin="dense"
            name="password"
            onChange={this.onChange}
            value={this.state.password}
            label="password"
            type="password"
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => this.authenticate()} color="primary">
            <Typography variant="caption">Login</Typography>
          </Button>
          <Button onClick={() => this.handleClose()} color="primary">
            <Typography variant="caption">Clear</Typography>
          </Button>
        </DialogActions>

        <Divider />

        <Paper elevation={3}>
          <p></p>
          <Typography color="primary" variant="inherit">
            <Link href="/register">new user?</Link>
          </Typography>
          <p></p>
        </Paper>
      </Dialog>
    );
  }
}
