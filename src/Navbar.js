

import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const style = {
    display: "flex",
    justifyContent: "center"
  }

  const liststyle = {
    // border: "1px solid black",
    listStyle: "none",
    color: "red",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    fontFamily: "serif",
    gap: "20px",
    color: "blue",
    textDecoration: "none", 
    marginTop: "20px"

  }

  return (
    <div className='navbar' style={style}>
      <ul style={liststyle}>   
       
      
        <div class="btn-group">
          <a href="#" class="btn btn-warning " aria-current="page"><Link to="/">ToDoList-1</Link></a>
          <a href="#" class="btn btn-warning "> <Link to="/second">ToDoList-2</Link></a>
          <a href="#" class="btn btn-warning ">  <Link to="/time">Check Time</Link></a>
        </div>

      </ul>
    </div>
  )
}
