import React, { useState } from 'react';

export default function Header() {
   const [ isOpen, setIsOpen ] = useState('');
   function toggleNav() {
       !isOpen ? setIsOpen('nav-open') : setIsOpen('')
       document.body.classList.toggle('nav-open')
   }
  
    return (
        <div>
            <header>
        <div class="logo">
            {/* <span> &lt; bre thunholm /&gt;</span> */}
            {/* <img src="#logo" alt=""> */}
        </div>
        <button onClick={toggleNav} class={`nav-toggle ${isOpen}`} aria-label="toggle navigation">
            <span class="hamburger"></span>
        </button>
        <nav class="nav">
            <ul onClick={toggleNav} class="nav__list">
                <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
                <li class="nav__item"><a href="#services" class="nav__link">My Services</a></li>
                <li class="nav__item"><a href="#about" class="nav__link">About Me</a></li>
                <li class="nav__item"><a href="#work" class="nav__link">My Work</a></li>
            </ul>
        </nav>
    </header>
        </div>
    )
}
