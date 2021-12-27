import React from 'react'
import {useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { useState,useEffect } from "react";
import axios from 'axios';
 const AppDetail = () => {
   let para = useParams();
    //console.log(para.Id);
    
   const [appDetailData,setAppDetailData]=useState(null);
   const [loading, setLoading] = useState(true);

  var config = {
    method: 'get',
    url: 'https://anil-dot-bluestacks-cloud-beginners.uc.r.appspot.com/get_details',
    params:{app_id:para.Id}

  };
  const makeApiCall=()=>{
    axios(config)
    .then(function (response) {
        setAppDetailData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    }).finally(() => {
        setLoading(false);
      });

  }
  useEffect(()=>{
   makeApiCall();
  },[])


  if (loading) {
    return <p>Data is loading...</p>;
  }
let appData=appDetailData; 

//console.log(appDetailData);

if(appData)
{
  return (
    <div >
       <div class="oQ6oV">
        <div class="hkhL9e">
          <div class="xSyT2c">
          <img src={appData.app_image_src} alt='Cover art' 
          class="T75of sHb2Xb"></img>
          </div>
        </div>
        <div class="D0ZKYe ">
        <div class="rlnrKc">
          <div class="sIskre">
              <h1 class="AHFaub">
              {appData.app_name+": "+appData.app_header_name}
              </h1>
              <div class="jdjqLd">
               <div class="ZVWMWc">
                   <div class="qQKdcc">
                    {appData.app_name}
                   </div>
               </div>
               <div class="dNLKff">
                <div class="pf5lIe">
                <p>{appData.app_ratings}</p>
                <Rating  defaultValue={appData.app_ratings.replace(/[^0-9\.]+/g,"")} precision={0.5} />
                </div>
                <span class="TBRnV AYi5wd">
                <span>{appData.users_rating_count}</span>
                <span class="qLorRc O3QoBc"></span>
                </span>
               </div>
              </div>
          </div>
          <div class="wE7q7b">
          <a class="btn" href={appData.download_link} target="_blank">Install</a>
          </div>
        </div>
        </div>
      </div>
       <div class="Rx5dXb">
        {
          appData.app_screen_shot_src.map((srcLink,index)=>{
            const screen_shot=(index==0)?<a class="resize" href={appData.video_link_url}><img class="resize" src={srcLink} alt=''></img> </a>:<img class="resize" src={srcLink} alt=''></img>
               return <span class="TdqJUe">{screen_shot}</span>
               
          })
        }
       
       </div>
       <div class="DWPxHb">
           <h4>App Descriptions: </h4>
       <p>{ appData.description_content}</p> 
       </div>
    </div>
)
}
else{
  return <div>App Data is not found</div>
}
    
}

export default AppDetail