import axios from 'axios';

const BANK_API_REQ_MAP = "http://localhost:8081/bank/";

class BankService{

    create(bank){
        return axios.post(BANK_API_REQ_MAP +'create' , bank);
    }

    searchAll(){
        return axios.get(BANK_API_REQ_MAP);
    }

    searchByRole(bankId){
        return axios.get(BANK_API_REQ_MAP +'search/'  + bankId);
    }

    update(bank){
        return axios.put(BANK_API_REQ_MAP+ 'update', bank);
    }

    delete(bankId){
        return axios.delete(BANK_API_REQ_MAP +'delete/' + bankId );
    }
}

export default new BankService();