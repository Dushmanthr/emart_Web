import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products/Products';
import ProductDesc from './components/ProductDesc/ProductDesc';



function App() {
  return (
   
      <>
       
      
        <BrowserRouter>

        <Navbar/>
        <Routes>
        
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/productdesc/:id' element={<ProductDesc/>}></Route>
        </Routes>
      </BrowserRouter>
      </>
      
     
     
     
    
  );
}

export default App;
