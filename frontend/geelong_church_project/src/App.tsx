import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './screens/home/home';
import { Footer } from './components/footer/footer';
import About from './screens/about/about';

const App = () =>{

  return(
    
    <>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element = { <About />} />
          </Routes>
          <Footer />
        </Router>
    </>
  )

}
export default App;
