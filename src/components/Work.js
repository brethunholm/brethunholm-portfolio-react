import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Work() {
    useEffect(() => {
        Aos.init({
            duration:2000,
            once: true, 
        });
    }, [])
    return (
        <section className="my-work grids" id="work">
            <h2 className="section__title">My Work</h2>
            <p className="section__subtitle">A selection of professional and personal projects</p>

            <div className="portfolio boxes" data-aos="fade-up">
                {/* -- Portfolio Item 1-- */}
                <Link to="/outstandingly" className="portfolio__item" >
                    <img src="images/outstandingly.jpg" alt="description of project" className="portfolio__img" /> </Link>

                    {/* Portfolio item 2  */}
                    <Link to="/save-the-date" className="portfolio__item">
                        <img src="images/wedding.jpg" alt="" className="portfolio__img" />
                    </Link>

                    {/* Portfolio item 3 */}
                    <Link to="/nama-go-meditate" className="portfolio__item">
                        <img src="images/meditation.jpg" alt="" className="portfolio__img"  />
                    </Link>

                    
            </div>
    </section>
            
        
    )
}
