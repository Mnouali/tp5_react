import React, { useEffect, useState } from 'react'

export default function UsersPosts() {
     
    const [Bigdata,setBigData]=useState([])
    const [posts,setPosts]=useState([])
    const [chongeClass,setChangeClass]=useState(false)

 
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").
        then((reponse)=>{return reponse.json()}).
        then((data)=>setBigData(data))
    },[])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").
        then((reponse)=>{return reponse.json()}).
        then((data)=>setPosts(data))
    },[])
 
  
 
  return (
    <div>
     <h1>numbre d'utilisateur:{Bigdata.length}</h1>  
      {Bigdata.map((e,index)=>{return <div key={index}>
       
        <h4>Nom:{e.name} {e.username}</h4>
        <p>Email :{e.email}</p>
        <p>Ville :{e.address.city}</p>
        <button onClick={()=>setChangeClass(!chongeClass)} id={index}>détails posts</button>
        {( chongeClass)?
         posts.forEach((donner)=>{
           if (donner.userId==e.id) {
            return (<header style={{width:"100%",height:"100px",backgroundColor:"beige"}} >
            <h6>{posts[e.id-1].title}</h6>
            <p>{posts[e.id-1].body}</p> 
          </header>)
           }

         }):""
      }
       
        


      </div>})}
    </div>
  )
}
