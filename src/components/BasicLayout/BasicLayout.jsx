import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';


const BasicLayout = ({ isMenuOpen, toggleMenu, isCartOpen, handleClick }) => {
  return (
    <>
      <Navbar isCartOpen={isCartOpen} handleClick={handleClick} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Outlet />
    </>
  );
};

export default BasicLayout;

BasicLayout.propTypes = {
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  isCartOpen: PropTypes.bool,
  handleClick: PropTypes.func
};