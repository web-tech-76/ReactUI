import axios from 'axios';

const UPLOAD_API_REQ_MAP= "http://localhost:8080/uploadfiles/";

class UploadService{

    
    uploadFile(file){
        return axios.post(UPLOAD_API_REQ_MAP + "upload", file);
    }

    uploadFiles(files){
        return axios.post(UPLOAD_API_REQ_MAP + "uploadmany", files);
    }

    findAll(){
        return axios.get(UPLOAD_API_REQ_MAP); 
    }

    deletefile(id){
        return axios.delete(UPLOAD_API_REQ_MAP + "delete/"+ id); 
    }

    download(id){
        //alert(id);
        return axios.get(UPLOAD_API_REQ_MAP + "download/"+ id , {responseType:"blob"}); 
    }

    deleteAll(){
        return axios.delete(UPLOAD_API_REQ_MAP + "deleteall"); 
    }

    
}

export default new UploadService();