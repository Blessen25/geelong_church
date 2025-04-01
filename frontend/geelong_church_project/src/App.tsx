import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Header from './components/header/header';

const App = () =>{

  return(
    
    <>
        <Routes>
          <Header />
        </Routes>
    </>
  )

}
export default App;
