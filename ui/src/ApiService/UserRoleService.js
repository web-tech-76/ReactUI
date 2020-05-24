import axios from 'axios';

const USER_ROLE_API_REQ_MAP = "http://localhost/rest/userroles/";

class RoleService{

    create(userrole){
        return axios.post(USER_ROLE_API_REQ_MAP +'create',userrole);
    }

    searchAll(){
        return axios.get(USER_ROLE_API_REQ_MAP);
    }

    getUsers(){
        return axios.get(USER_ROLE_API_REQ_MAP + 'users');
    }

    getRoles(){
        return axios.get(USER_ROLE_API_REQ_MAP + 'roles');
    }

    searchByRole(userroleId){
        return axios.get(USER_ROLE_API_REQ_MAP +'search/'  + userroleId);
    }

    update(userrole){
        return axios.put(USER_ROLE_API_REQ_MAP+ 'update', userrole);
    }

    delete(userroleId){
        return axios.delete(USER_ROLE_API_REQ_MAP +'delete/' + userroleId);
    }
}

export default new RoleService();