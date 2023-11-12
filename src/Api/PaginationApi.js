import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../App.css";

export default function Pagination(){
    const[data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [max,setmax] = useState(0);
    useEffect(
        ()=>{
            axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${10} &_page=${page}`).
            then(res=>{return (res.data)}).
            then(data=>{
              if (data.length==0) {
                 setPage(page-1)
              }else{
                return setData(data)
              }
            })
        },  [page] )
 
const pageination=(numbreOfPage)=>{
     setPage(numbreOfPage)
     console.log(numbreOfPage)
}
    const next=()=>{
        setPage(page+1)
        
    }
    const previous=()=>{
        if (page>1) {
            setPage(page-1)
        }
        else if (page==1) {
            setPage(page)
        }
    }
 
  return (
    <div style={{display:'flex', justifyContent:"center"}}>
         <div>
            
         <ul className='list-group'>
            {console.log(data.length)}
            {data.map((item)=>{
                return <li  className='border d-flex justify-content-between align-item-center p-2 w-20'> {item.title} <br/></li>
            })}
        </ul>
        <input className='btn btn-success mt-2' type='button' value='previous' onClick={previous}/>
        <input className='btn btn-primary mt-2 ms-1'  type='button' value='next' onClick={next}/>
         </div>
       
    </div>
  )
}
