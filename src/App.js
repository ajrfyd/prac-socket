import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";


const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/room/:id' element={<Room/> }/>
    </Routes>
  )
}

export default App;