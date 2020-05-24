import axios from 'axios';

const ROLE_API_REQ_MAP = "http://localhost/rest/roles/";

class RoleService{

    create(role){
        return axios.post(ROLE_API_REQ_MAP +'create' , role);
    }

    searchAll(){
        return axios.get(ROLE_API_REQ_MAP);
    }

    searchByRole(roleId){
        return axios.get(ROLE_API_REQ_MAP +'search/'  + roleId);
    }

    update(role){
        return axios.put(ROLE_API_REQ_MAP+ 'update', role);
    }

    delete(roleId){
        return axios.delete(ROLE_API_REQ_MAP +'delete/' + roleId );
    }
}

export default new RoleService();