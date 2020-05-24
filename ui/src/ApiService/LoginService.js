import axios from 'axios';
import "./Token";
//import { getToken } from './Token';

const LOGIN_API_REQ_MAP= "http://localhost:8080/auth/";

class LoginService{

    authenticate(jwtUser){
        return axios.post(LOGIN_API_REQ_MAP + "token" , jwtUser);
    }
    
    IsUserNameRegistered(username){
        return axios.post(LOGIN_API_REQ_MAP+ "checkuser" + username);
    }

    IsPhoneRegistered(phone){
        return axios.post(LOGIN_API_REQ_MAP+"checkphone" + phone);
    }

    IsEmailRegistered(email){
        return axios.post(LOGIN_API_REQ_MAP+"checkemail" + email);
    }
}

export default new LoginService();