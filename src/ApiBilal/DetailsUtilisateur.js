import React, { useEffect, useState } from 'react'
export default function DetailsUtilisateur() {
    const [data,setData]=useState([]);
    const [iid,setId]=useState("")
 
  
    
    const chercher=(e)=>{
         setId(e.target.value);
         console.log(iid)
    }
     useEffect(
        ()=>{
            fetch(`https://jsonplaceholder.typicode.com/users/${iid}`).
            then((repense)=>{return repense.json()}).
            then((user)=>{setData(user)})
        }
    ,[]) 
     
 
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
       <input onChange={chercher}  />
     
         {
            (iid=="")?
            '\n dakhal id ':
            <div style={{width:"400px",height:"200px",backgroundColor:"green",borderRadius:"15px",position:"absolute",right:"100px" ,color:"beige",paddingTop:"20px" ,paddingLeft:"10px"}}>
          
            <h4 style={{color:'brown'}}>id:{data.id} Nom:{data.name} {data.username}</h4> 
            <p>Email :{data.email}</p>
            <p>TelePhone :{data.phone}</p>
            <p>Site wibe :{data.website}</p>
         
       </div>
         }
    </div>
  )
}
