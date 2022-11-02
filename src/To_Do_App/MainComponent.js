
import React, { useReducer, useRef } from 'react';
import './style.css'

let initialstate = [];

export default function Todo() {

  const reducer = (state, action) => {

    switch (action.type) {
      case "add": return [...state, { name: action.name }];
      case "remove": return state.filter((name, index) => index !== action.index);
      // default: {
      //   return state;
      // }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialstate)
  const inputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(
      {
        type: "add",
        name: inputRef.current.value
      }
    )

    inputRef.current.value = "";
  }


  return (
    <div className='todomaindiv container'>
      <h1 className='my-4  mb-4'>This ToDo list is made up using Reducers</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" ref={inputRef} placeholder='Write your todo here' onChange={(event) => {
          console.log(event.target.value);
        }} />
      </form>

      <ul className='listdiv mt-4'>

        <h2>Your To-Do List</h2>
        {state.map((todos, index) => (
          <li key={index}>{todos.name}

            <button onClick={() =>
              dispatch({
                type: "remove",
                index
              }
              )
            }>Remove</button></li>
        ))}
      </ul>

    </div>

  )
}
