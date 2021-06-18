import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        
               <footer className="footer">
        <a href="mailto:bthunholm@gmail.com" className="footer__link">bthunholm@gmail.com</a>
        <ul className="social-list">
        <li className="social-list__item" >
                        <a className="social-list__link" href="https://github.com/brethunholm">
                            <FontAwesomeIcon className="icon" icon={faGithubSquare}></FontAwesomeIcon>
                        </a>
                    </li>
                    <li className="social-list__item" >
                        <a className="social-list__link" href="https://www.linkedin.com/in/bre-thunholm-043916173/">
                        <FontAwesomeIcon className="icon" icon={faLinkedinIn}></FontAwesomeIcon>
                            </a>
                    </li>
        </ul>

    </footer>
        
    )
}


