

import React, { useState, useEffect } from 'react'
import "../To_Do_App/style.css"
import Time from './Time/Time';
// import  DeleteIcon from "@material-ui/icons/Delete";
import image from "../TO_DO_App-using_state/Time/Capture.png"

function getitems() {
    let items = localStorage.getItem("lists");
    if (items) {
        return JSON.parse(items);

    } else {
        return [];
    }
}

export default function List() {

    const [todo, settodo] = useState("");
    const [data, setdata] = useState(getitems());

    useEffect(() => {

        localStorage.setItem("lists", JSON.stringify(data));

    }, [data])


    const onChnageHandler = (event) => {
        settodo(event.target.value);
        console.log(todo)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const newdata = todo;
        setdata([...data, newdata]);
        settodo("");
    }

    const removeTask = index => {
        const newTasks = [...data];
        newTasks.splice(index, 1);
        setdata(newTasks);
    };

    function tick(e){
        (e.target.parentElement.previousElementSibling.classList.add("tick"))
    }

    
    return (
        <div className='todomaindiv'>

        <div className="time">
           <Time></Time>
           
          <h5>Hey!</h5>
          
        </div>

            <h1 className='my-4'>Got Stuffs? Save it here!</h1>
            <form onSubmit={onSubmitHandler}>
                <input type="text" value={todo} placeholder='Write yur todos here' onChange={onChnageHandler} />
            </form>

            <ul className='listdiv my-4'>
                <h2> Your Todo's!</h2>

                {
                    data.map((itmes, index) => {
                        return <li  key={index}> <span id='item'>{itmes}</span>
                            <div className='icons'> 
                            <i class="fa fa-check-circle-o" onClick={tick}></i>
                             <i class="fa fa-trash" onClick={() => removeTask(index)}></i>
                           </div>


                        </li>
                    })
                }

            </ul>

        </div>
    )
}
