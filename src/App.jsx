import { useState } from 'react'
import React from 'react'
import Navbar from './component/Navbar'
import Carousel from './component/Carousel'
import News from './component/News'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sports from './component/Sports'
import Climate from './component/Climate'
import NoPage from './component/NoPage'
import Science from './component/Science'

const App = () => {

  return (
    <>
      
    
     <BrowserRouter>
     <Navbar/>
       <Routes>
      <Route path="/" element={<News/>} />
       <Route exact path='/home'  element={<News/ >} />
      <Route exact path='/sports'  element={<Sports/ >} />
      <Route exact path='/climate'  element={<Climate/ >} />
      <Route exact path='/science'  element={<Science/ >} />
      <Route exact path='*'  element={<NoPage/>} />
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
