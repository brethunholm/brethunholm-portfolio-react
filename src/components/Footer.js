import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        
               <footer className="footer">
                   {/* <h4>Interested in doing a project together?</h4>
                   <button className="footer-btn" onClick={()=> window.location.href='mailto:bthunholm@gmail.com' }>Email Me</button>
        <a href="mailto:bthunholm@gmail.com" className="footer__link">bthunholm@gmail.com</a> */}
        <ul className="social-list">
        <li className="social-list__item" >
                        <a className="social-list__link" href="https://github.com/brethunholm" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="icon" icon={faGithubSquare}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li className="social-list__item" >
                        <a className="social-list__link" href="https://www.linkedin.com/in/bre-thunholm-043916173/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="icon" icon={faLinkedinIn}></FontAwesomeIcon>
                            </a>
                    </li>
                    <li className="social-list__item" >
                        <a className="social-list__link" href="mailto:bthunholm@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="icon" icon={faEnvelope} />
                            </a>
                    </li>
        </ul>
<span>&#169; Bre Thunholm 2021</span>
    </footer>
        
    )
}


