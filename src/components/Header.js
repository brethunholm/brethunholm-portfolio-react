import { useState } from 'react';
import ContactMe from './ContactMe';

export default function Header() {
  const [show, setShow] = useState(false);

  function closeModalHandler() {
    setShow(false);
  }

  const [isOpen, setIsOpen] = useState('');
  function toggleNav() {
    !isOpen ? setIsOpen('nav-open') : setIsOpen('');
    document.body.classList.toggle('nav-open');
  }

  return (
    <header>
      {/* { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null} */}
      <div className="resume">
        {/* <a href="https://app.box.com/s/rv3cjoxhq171kr3b242xiv1rc90fv949" target="_blank" rel="noopener noreferrer">&lt; Resume / &gt;</a> */}
        <button onClick={() => setShow(true)} className="btn-openModal">
          &lt; contact me / &gt;
        </button>
        <ContactMe show={show} close={closeModalHandler} />
      </div>

      <button
        onClick={toggleNav}
        className={`nav-toggle ${isOpen}`}
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul onClick={toggleNav} className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
