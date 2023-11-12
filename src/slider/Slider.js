import React, { useState } from 'react'
import image1 from"./images/image1.jpg"
import image2 from"./images/image2.jpg"
import image3 from"./images/image3.jpg"
import image4 from"./images/image4.jpg"
import icon from"./images/icone.png"
 
 


export default function Slider () {
    const [incDec,setIncDec]=useState(0)
    const tableImages=[image1,image2,image3,image4]
    const increment=()=>{
      if(incDec==tableImages.length-1){
        setIncDec(0);
      }else{
        setIncDec(incDec+1);
      }
    }
    const decrement=()=>{
      if(incDec==0){
        setIncDec(tableImages.length-1);
      }else{
        setIncDec(incDec-1);
      }
    }
  return (
    <div id='cont' >
         <div>
         <img id='imgae1' src={tableImages[incDec]}/>
          
          <img   id='btn1' onClick={()=> increment()}  src={icon}/>
        
         <img id='btn2'   onClick={()=> decrement()}  src={icon}/>
         </div>
        
        
    </div>
  )
}
