
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CarsPage from './pages/CarsPage';
import FaqPage from './pages/FaqPage'
import RecentWork from './pages/RecentWork'
import Footer from './components/Footer';
import { BiMenu } from 'react-icons/bi';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='container'>
      <header>
        <BiMenu className='menu-icon' onClick={handleMenuClick} />
        <div className='leftBar'>
          <Link to="/">photography</Link>
          <Link to="/cars">cars</Link>
        </div>
        <p>Pavel Morozov</p>
        <div className='rightBar'>
          <Link to="/recent-work">recent work</Link>
          <Link to="/faq">faq</Link>
        </div>
      </header>


      {menuOpen && (
        <div className='menu-overlay'>
          <div className='menu'>
            <div className='menu-item'>
              <Link onClick={handleMenuClick} to="/">photography</Link>
              <Link onClick={handleMenuClick} to="/cars">cars</Link>
              <Link onClick={handleMenuClick} to="/recent-work">recent work</Link>
              <Link onClick={handleMenuClick} to="/faq">faq</Link>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/recent-work' element={<RecentWork />} />
        <Route path='/faq' element={<FaqPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;