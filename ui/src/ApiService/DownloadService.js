import axios from 'axios';
const DOWNLOAD_API_REQ_MAP= "http://localhost:8080/files/";

class DownloadService{

    download(){
        return axios.post(DOWNLOAD_API_REQ_MAP+ "download");
    }

}
export default new DownloadService();