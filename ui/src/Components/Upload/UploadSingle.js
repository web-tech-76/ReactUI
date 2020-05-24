import React, { Fragment,Component } from "react";
import { Typography, Paper, Container, Grid, Button, Table, TableBody, TableRow, TableCell, Link } from "@material-ui/core";
import UploadService from "../../ApiService/UploadService";
import { saveAs } from 'file-saver';


export default class UploadSingle extends Component
{
    constructor(props){
        super(props);

        this.state={
            //fileInput: null,
            totalfiles : 0,
            status: 0,
            uploadedfiles: [],
        
        };

        this.onfileUploadChange= this.onfileUploadChange.bind(this);
        this.reloadFileList= this.reloadFileList.bind(this);
        this.deleteFile= this.deleteFile.bind(this);
        this.deleteAll= this.deleteAll.bind(this);
        this.download= this.download.bind(this);
    }

    componentDidMount(){
            
        this.reloadFileList();
    }

    download = async (id, filename) => {
        await UploadService.download(id)
        .then(
            (response) => {
                saveAs(response.data,filename);
            }

        )
     }

    async reloadFileList(){
        let res = await UploadService.findAll();
        
        this.setState({
             
            status : res.data.status,
            uploadedfiles : res.data.result,
            totalfiles: res.data.totalfiles
        });

    }

    async deleteAll(){
         await UploadService.deleteAll();
        this.reloadFileList(); 

    }
    async deleteFile(id){

         await UploadService.deletefile(id);
        this.reloadFileList(); 

    }
    
   
    onfileUploadChange= async (event) => {
        const formdata = new FormData();
        formdata.append("file", event.target.files[0]);    
        await UploadService.uploadFile(formdata);
        this.reloadFileList(); 
    }


    render(){
        let button;
        if(this.state.totalfiles > 0 )
        {
            button=  <Button onClick={ () => this.deleteAll() } variant="text"><Typography color="secondary" variant="caption">remove all</Typography></Button>
        }
       
         
        return(
    <Fragment>
        <Container maxWidth="xl" >
        <Grid spacing={2}  container justify="flex-start">
            
            <Grid xs={6} item >
                <Paper elevation={3} >
                <p></p>
                <Typography  style={{ margin: "10px" } } color="secondary"  variant="overline"> File(s) Upload</Typography>
                <p></p>
                <Button component="label" variant="text" color="primary">
                    <Typography variant="caption"> select</Typography>                        
                    <input  accept=".txt, .doc, .docx, .csv, .pdf, .xls, .xlsx, .xml" 
                                    onChange={(event) => this.onfileUploadChange(event) }  
                                    name="file" type="file" style={{ display: "none" }}>
                    </input>       
                </Button>
                </Paper> 
            </Grid>
                        
            <Grid xs={6} item  >
            <Paper elevation={3}>
                <p></p>
                <Typography  style={{ margin: "10px" } } color="primary" variant="overline"> Total Files: {this.state.totalfiles} </Typography>               
                {button} 
                <p></p>
                <Table>
                <TableBody>
                   {
                    this.state.uploadedfiles.map(
                    (file) => (
                    <TableRow key={file._id}>
                    <TableCell>
                      <Link download component="button" variant="body2" onClick={() => { this.download(file._id, file.filename) }}> <Typography variant="caption" color="primary">{file.filename}({file.chunkSize})</Typography></Link>
                    </TableCell>
                    <TableCell>
                        <Button onClick={ () => this.deleteFile(file._id) } variant="text"><Typography color="secondary" variant="caption">remove </Typography></Button>
                    </TableCell>
                                        
                    </TableRow>
                    ) ) }
                </TableBody>
                </Table>
                      
            </Paper> 
            </Grid>
        
        </Grid>
        </Container>
    
    </Fragment>
        );
    }    

}