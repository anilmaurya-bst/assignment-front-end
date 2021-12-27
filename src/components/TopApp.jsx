import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import { Link} from "react-router-dom";
import Button from './Button';

export const TopApp = () => {
      
  const [appData,setAppData]=useState();
  var config = {
    method: 'get',
    url: 'https://anil-dot-bluestacks-cloud-beginners.uc.r.appspot.com/get_top_apps'
  };
  const makeApiCall=()=>{

    axios(config)
    .then(function (response) {
      setAppData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  useEffect(()=>{
   makeApiCall();
  },[])

  console.log("fetched");
  const images=[]

  if(appData)
  {
  Object.keys(appData).forEach(function(key) {
    
    const image = appData[key].map(image => {
      
      return(
        <div className="center" key={image.app_name} >
        <div className="center" >
        <Link to={"/AppDetail/"+image.next_page_end_point}  target="_blank"> 
         <img  src={image.image_src} alt="" /></Link>
         <p className="jss">{image.app_name}</p>
      </div>
      </div>
    )
   });
   const ele=<div class="task">
     <h1>{key}</h1>
     <br></br>
     {image}
   </div>
   images.push(ele);
   })
  }
  return (<div>
    <header class="header">
         <h1>Top Apps</h1>
         <Button ></Button>
         </header>
      {
          images.map((item)=>{

            return (<div >{item}
              </div>
              )
          })
      }
      
  </div>);
}

export default TopApp