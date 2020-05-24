import React, { Component } from "react";
import axios from "axios";
import { getToken ,  authHeader } from "../../ApiService/Token";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
        message : ''
    };
  }

  async componentDidMount() {
    const jwt_token = getToken();

    if (jwt_token) {
        //alert(authHeader());
      await axios
        .get("http://localhost:8080/api/users/", {headers: authHeader() })
        .then((res) => {
                this.setState(
                    {
                        message : res.data

                    }
                );
                alert(this.state.message);
        })
        .catch((err) => {
              
        })
    }
  }

  render() {
    return( 
            <div>{this.props.children}</div>
        );
  }
}
