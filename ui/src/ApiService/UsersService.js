import axios from 'axios';
import { authHeader} from './Token';

const USER_API_REQ_MAP= "http://localhost:8080/api/users/";

class UsersService{

    createUser(user){
        return axios.post(USER_API_REQ_MAP+'create' , user);
    }

    
    searchAll(){
        return axios.get(USER_API_REQ_MAP, authHeader);
    }

    searchByUser(userName){
        return axios.get(USER_API_REQ_MAP +'search/'  + userName);
    }

    updateUser(user){
        return axios.put(USER_API_REQ_MAP+ 'update', user);
    }

    deleteUser(userName){
        return axios.delete(USER_API_REQ_MAP +'delete/' + userName );
    }
}

export default new UsersService();