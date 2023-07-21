import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import BasicLayout from './components/BasicLayout/BasicLayout';
import Home from './Pages/Home/Home';
import './App.css';

function App() {
  // For Cart
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleClick = () => setIsCartOpen(!isCartOpen);

  // For Hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Routes>
        <Route path='/' element={<BasicLayout isCartOpen={isCartOpen} handleClick={handleClick} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}>
          <Route path='/' element={<Home isCartOpen={isCartOpen} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
