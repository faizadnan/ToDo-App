

import React from 'react'
import List from './TO_DO_App-using_state/List'
import Todo from './To_Do_App/MainComponent'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Checktime from './Time/Checktime'


export default function App() {
      return (
            <>
                  <div className="app">
                        {/* <Navbar /> */}
                        <Routes>

                              <Route path='/' element={<List />} />
                              <Route path='second' element={<Todo />} />
                              <Route path='time' element={<Checktime />} />


                        </Routes>

                  </div>


            </>)
}
