import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_JOBS } from "./GraphQL/Queries";
import "./GetUsers.css";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { BrowserRouter, Route, Switch,useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    padding: 14,
  },
  paper: {
    padding: '31px',
    margin:'auto',
    maxWidth: 700,
    marginTop: 14,
    backgroundColor:'khaki', 
    
    alignitems: 'center',
  },
  outerPaper: {
    margin: "auto",
    maxWidth: "1027px",
    paddingTop: "3px",
    backgroundColor: "red",
  },
  
}));


    
    
function GetJobs() {
  const classes = useStyles();
  const { error, loading, data } = useQuery(LOAD_JOBS);
  const [jobs, setjobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const excludeColumns = ["id","userEmail","applyUrl","isPublished","description" ];
  let history = useHistory();
  useEffect(
    
    () => {
    if (data) {
      console.log(data);
     
      setjobs(data.jobs);
    }
  }, [data]
  );
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };
  const clickhandler=(e,val)=>{
    history.push({
      pathname: '/detail',
      jobDetail:{
          Detail: val 
      }
});
  }
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setjobs(data.jobs);
    else {
      const filteredData = data.jobs.filter(item => {
        return Object.keys(item).some(key =>{
          if(item[key]!= null){
            return excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
          }

        }
          
        );
      });
      setjobs(filteredData);
    }
  }
  
  
  return (
    <div>
    <div style={{marginTop:'20px',justifyContent:'flex-end'}}>
      <TextField id="outlined-basic" label="Search" variant="outlined" 
      onChange={e => handleChange(e.target.value)}
/>
    </div>
    
      
      {jobs.map((val) => {

        
        return (
        <div className="">
            <Paper className={classes.paper} style={{display:"flex", backgroundColor:'AntiqueWhite', }}>
              <Grid container spacing={2}>
                <Grid item>
                  
                  <Typography
                    style={{ fontSize: "16px" }}
                    color="black"
                    gutterBottom
                    
                    
                  >
                  <b>Job Title :</b>{val.title}<br/>
                  <b>Job ID :</b>{val.id}<br/>
                  <b>Job UserEmail :</b>{val.userEmail}<br/>
                  <b>Job Published Date :</b>{val.isPublished.toString()}<br/>
                  <b>Where to Apply :</b>{val.applyUrl}<br/>
                  <b>Company Name:</b>{val.company.name}<br/>
                  <br/>
                  <b>Job Description:</b><p style={{textOverflow: 'ellipsis',
                    wordWrap: 'breakWord',
                    overflow: 'hidden',
                    maxHeight: '3.6em',
                    lineHeight: '1.8em'}}>{val.description}</p><br/>
                    

                  </Typography>
                  <Button onClick={(e)=>{clickhandler(e,val)}}>Show Details</Button>
                  
                </Grid>
              </Grid>
              
            </Paper>
        </div>
        )
        
      })} 
    </div>
  );
}

export default GetJobs;
