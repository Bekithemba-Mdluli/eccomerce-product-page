import React, { useState } from 'react'

import logo from '../images/logo.svg';
import menu from '../images/icon-menu.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import close from '../images/icon-close.svg';

function Header() {
  const [isOpen, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={ isOpen? "container drop" : "container"}>
        <header className='header flex'>
            <div className='header__first flex'>
                <div className='header__first-menu hide-for-desktop' onClick={handleToggle}>
                    <img src={menu} alt='Menu' />
                </div>

                <div className='header__first-logo'>
                    <img src={logo} alt='Logo' />
                </div>
                <nav className='header__first__nav hide-for-mobile'>
                    <ul className='header__first__nav-items hide-for-mobile'>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>

            <div className='header__second flex'>
                <div className='cont'>
                    <div className='header__second-cart'>
                    <span className='count'>3</span>
                        <img src={cart} alt='Cart' />
                    </div>
                </div>
                <div className='header__second-avatar'>
                    <img src={avatar} alt='Avatar' />
                </div>
            </div>
        </header>
        <hr className='hide-for-mobile'/>

        <div className={isOpen ? 'header__first__nav hide-for-desktop' : 'hide'}>
            <ul className='header__first__nav-items hide-for-desktop'>
                <li className='close'><img src={close} alt='close navigation' onClick={handleToggle}/></li>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Header