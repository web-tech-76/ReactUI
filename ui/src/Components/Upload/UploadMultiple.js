import React, { Fragment,Component } from "react";
import { Typography, Paper, Container, Divider,  Grid, Button, Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import UploadService from "../../ApiService/UploadService";


let totalfiles = 0;

export default class Upload extends Component
{
    constructor(props){
        super(props);

        this.state={
            fileInput : {},
            selectedFiles : [],
            status: 0,
            message: ""

        };

        this.uploadFile = this.uploadFile.bind(this);
        this.onfileUploadChange= this.onfileUploadChange.bind(this);
        this.clearAll= this.clearAll.bind(this);
        this.removefile= this.removefile.bind(this);
    }

    uploadFile = async () =>  {
        
        const formdata = new FormData();
        var array = [...this.state.selectedFiles];
        
        for(let index=0; index<array.length; index++ ){
                formdata.append('file', array[index]);    
        }
         
        let res = await UploadService.upload(formdata);
        if(res.status === 0){
            
        }


    }


    removefile(index)
    {
        //alert(index);
         if(totalfiles === 1){
             window.location.reload(false);
             return;
         }
        
        
        let array = [...this.state.selectedFiles]; 
        
        if (index !== -1 && array.length > 0 ) 
        {
        
          array.splice(index, 1);

          this.setState(
              {
                  selectedFiles: array
              }
            );

            totalfiles = (totalfiles - 1)
        }
        


        

    }

    clearAll(){
        
        //alert("calling flush all");
        window.location.reload(false);
    }
    
    onfileUploadChange= (event) => {
           
        this.setState(
            {
                [event.target.name]: event.target.value
            }
            

        );

            
            //alert(event.target.name); 

            //this.state.selectedFiles.push(this.state.file);
            var array = Array.from(event.target.files)
            
            for(let i=0; i< array.length; i++)
                {

                    let selectedfile = 
                        {    filename:  array[i].name,
                             fileobj :  array[i],
                             index : i
                        };
                    
                    
                    this.state.selectedFiles.push(selectedfile);
                    
                    //selectedFiles.push(selectedfile);
                   // alert(selectedfile.filename);
                    
                    totalfiles = (totalfiles + 1);
                }
    }

    render(){
        return(
            <Fragment>
            <Container maxWidth="xl" >
                <Grid spacing={2}  container justify="flex-start">
                <Grid xs={6} item  >
                <Paper elevation={3} >
                <p></p>
                    <Typography align="center" variant="h6"> File(s) Upload</Typography>
                        <Button component="label" variant="text" color="primary">
                            <Typography variant="caption"> select</Typography>                        
                            <input  accept=".txt, .doc, .docx, .csv, .pdf, .xls, .xlsx, .xml" 
                                    onChange={(event) => this.onfileUploadChange(event) }  multiple  
                                    name="fileInput" type="file" style={{ display: "none" }} 
                            />       
                        </Button>
                        <Divider />
                            <Typography color="textSecondary" variant="caption" > Total Files: ({totalfiles})</Typography>
                            <p></p>
                            <p></p>                           
                            <Table>
                                <TableBody>
                                    {
                                    this.state.selectedFiles.map(
                                        (row) => (
                                    <TableRow key={row.index}>
                                        <TableCell>
                                            <Typography variant="caption">{row.index} {row.filename}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="text" onClick={() => this.removefile(row.index)} ><Typography variant="caption">remove </Typography></Button>
                                        </TableCell>
                                        
                                    </TableRow>
                                            )
                                        )
                                    }
                                    
                                </TableBody>
                            </Table>
                            
                        <Divider />
                        
                        <Grid xs={6} item>
                        <Button  variant="text" color="primary">
                            <Typography variant="caption"> submit</Typography>
                        </Button>
                        
                        <Button onClick= {this.clearAll}  variant="text" color="primary">
                            <Typography variant="caption"> clearall</Typography>
                        </Button>
                        </Grid>
                        
                        <Divider />
                        
                </Paper> 
                </Grid>
                </Grid>
                </Container>
            </Fragment>
        );
    }    


}