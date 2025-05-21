import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './screens/home/home';
import { Footer } from './components/footer/footer';
import About from './screens/about/about';
import Contact_Us from './screens/contact/contact';
import Ministries from './screens/ministries/ministries';
import WeBelieve from './screens/webelieve/webelieve';
import BibleVerse from './screens/bibleverse/bibleverse';
import PlanYourVisit from './screens/planyourvisit/planyourvisit';

const App = () =>{

  return(
    
    <>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element = { <About />} />
            <Route path='/contact' element = { <Contact_Us />} />
            <Route path='/ministries' element = { <Ministries />} />
            <Route path='/planyourvisit' element = { <PlanYourVisit />} />
            <Route path='/webelieve' element = { <WeBelieve/>} />
            <Route path='/bibleverse' element = { <BibleVerse />} />
          </Routes>
          <Footer />
        </Router>
    </>
  )

}
export default App;
