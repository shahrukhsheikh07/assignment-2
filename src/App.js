import React from 'react';
import {BrowserRouter ,Routes,Route } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import RegisPage from './component/RegisPage';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        
      <Route exact path="/" element={<LoginPage/>}/> 
      <Route path="/loginpage" element={<LoginPage/>}/> 
      <Route path="/regispage" element={<RegisPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App;