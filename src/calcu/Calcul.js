import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import"../App.css";
 
export default function Calcul() {
    const [result,setresult] = useState("")
    const ecrire = (e)=>{
        setresult(result+e.target.value)
    }
    const supprimer = ()=>{
        setresult(result.slice(0,result.length-1))
    }
    const C = (e)=>{
        setresult("")
    }
    const calc = ()=> {
        try{
             setresult(eval(result))
        }catch{
            setresult("error ! invalid execition")
        }
        
    }
    let Random=()=>{
          let p1=document.getElementById("P1");
          let p2=document.getElementById("P2");
          let rand=Math.floor(Math.random()*200-100);
          let tab=["+","-","/","x"];
          let randTab=Math.floor(Math.random()*3);
           
          p1.innerText=rand;
          p2.innerText=tab[randTab];

    }
    
   
   
    
  return (
    <div id='div1' style={{display:"flex",justifyContent:"center"}}>
 
     <div id='div2' style={{position:"relative",top:"50px" ,backgroundColor:"gray",width:"238px",height:"300px" ,padding:"30px",borderRadius:"20px",border:"1px solid black"}}>   
    
        <input id='in1' style={{borderBlockColor:'gray' ,borderRadius:"10px"}}  type="text" value={result}/><br/>
        <input id='b1' className="btn btn-dark m-1 " type="button" value="1" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="2" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="3" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-warning m-1" type="button" value="C" onClick={()=>C()}/><br/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="4" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="5" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="6" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="+" onClick={(e)=>ecrire(e)}/><br/> 
        <input id='b1' className="btn btn-dark m-1"type="button" value="7" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1"type="button" value="8" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="9" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="-" onClick={(e)=>ecrire(e)}/><br/>
        
        
        <input  id='b1' className="btn btn-dark m-1" type="button" value="." onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="0" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-success m-1 " type="button" value="=" onClick={()=>calc()}/>
        <input  id='b1' className="btn btn-dark m-1" type="button" value="*" onClick={(e)=>ecrire(e)}/><br/> 
        
        
        <input id='b1' className="btn btn-dark m-1" type="button" value="(" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-dark m-1 " type="button" value=")" onClick={(e)=>ecrire(e)}/>
        <input id='b1' className="btn btn-danger m-1" type="button" value="sup" onClick={()=>supprimer()}/>
        <input id='b1' className="btn btn-dark m-1" type="button" value="/" onClick={(e)=>ecrire(e)}/><br/>
        
  
        
        </div>  
        

    </div>
  )
}

