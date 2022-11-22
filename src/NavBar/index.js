import React from 'react';
import Logo from '../Logo';

const NavBar = () => {
  return (
    <>
    <header>
      <nav>
        <Logo />
        <div className='nav-bar-actions'>
          <div className='nav-bar-total'>
          <span className='nav-bar-total-quantity'>2 cursos</span>
          <span className='nav-bar-total-price'>R$ 20,00</span>
          </div>
          <button className='clean-btn'>LIMPAR</button>
        </div>
      </nav>
    </header>
    </>
  )
}

export default NavBar;