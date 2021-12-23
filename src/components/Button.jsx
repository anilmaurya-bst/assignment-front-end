import { useCallback ,useState} from "react";
import axios from 'axios';

 const Button = () => {
   
    var config = {
        method: 'get',
        url: 'https://anil-dot-bluestacks-cloud-beginners.uc.r.appspot.com/rescrapping'
      };
    
   

      const makeApiCall=()=>{
        
        axios(config)
        .then(function (response) {
          console.log(response.status);
          console.log(response.data);
          window.location.reload(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    
      }
    
     const getData=useCallback(
         () => {
             makeApiCall()
         },
         [],
     )

     const onclick=()=>{
         getData();
         console.log("clicked")
     }
     
    return <button onClick={onclick} className="btn">reScrap</button>
}

export default Button