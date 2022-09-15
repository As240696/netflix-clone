import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage1 from './Homepage1';
import App from './App';

function Netflix() {
  return (
    <Routes>
        <Route exact path='/' element={<Homepage1 />} />
        <Route path='/explore' element={<App />}/>
    </Routes>
  )
}

export default Netflix;