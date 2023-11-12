import React, { useRef } from 'react'

export default function UseReef() {
    const table=useRef([])
    const contentDiv=useRef()
    const add=(e)=>{
        table.current.push(e) 
        
         
    }
    const AddToDiv=()=>{
     
        let c=0
        for (let i = 0; i < table.current.length; i++) {
           if (table.current[i].checked==true) {
                c++;
                if (c>=2) {
                    contentDiv.current.innerText+=table.current[i].value
                }
                 
           }
      
            
        }
        if (c<2) {
            alert("weld9aha")
        }else{

        }
   
        }
    }
     
  return (
    <div>
       chose your color préférer:<br/>
      <input ref={add} type='checkbox' value='red'/>red
      <input ref={add} type='checkbox' value='blue'/>blue
      <input ref={add} type='checkbox' value='black'/>black
      <input ref={add} type='checkbox' value='green'/>green
      <button onClick={AddToDiv}>Add</button>
      <div ref={contentDiv}>

      </div >
    </div>
  )
