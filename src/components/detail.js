import React from 'react'

function Detail(props) {
    return (
        <div style={{backgroundColor:'AntiqueWhite',color:'black',height:'1000px',fontSize:'2s0px'}}>
            
            <b>Job Title :</b>{props.location.jobDetail.Detail.title}
            <br/>
            <br/>
                  <b>Job ID :</b>{props.location.jobDetail.Detail.id}
                  <br/>
                  <br/>
                  <b>Job UserEmail :</b>{props.location.jobDetail.Detail.userEmail}
                  <br/>
                  <br/>
                  <b>Job Published Date :</b>{props.location.jobDetail.Detail.isPublished.toString()}
                  <br/>
                  <br/>
                  <b>Where to Apply :</b>{props.location.jobDetail.Detail.applyUrl}
                  <br/>
                  <br/>
                  <b>Company Name:</b>{props.location.jobDetail.Detail.company.name}
                  <br/>
                  <br/>
                  
                  <b>Job Description:</b>{props.location.jobDetail.Detail.description}<br/>
        </div>
    )
}

export default Detail
