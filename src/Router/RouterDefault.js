import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage } from '../Pages/Homepage'
import { Userpage } from '../Pages/Userpage'

export const RouterDefault = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/user' element={<Userpage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
