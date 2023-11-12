import React from 'react'

export default function Item(props) {
  const styletext={
    textDecoration:props.completed?"line-through":"none"
  }
  return (
    <div >
          
          <li className="border d-flex justify-content-between align-item-center p-2 m-2">
            <button className='btn btn-success' onClick={props.functionStyle}>valid</button>
            <div className="p-3" style={styletext}>{props.txt}</div>
           
            <button className="btn btn-danger p-2 h-50" onClick={props.fun}>Supprimer</button>
          </li>
      
    </div>
  )
}
