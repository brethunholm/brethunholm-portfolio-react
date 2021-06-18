import React from 'react'
import { Link } from 'react-router-dom';

export default function Work() {
    return (
        <div>
              <section className="my-work" id="work">
        <h2 className="section__title">My Work</h2>
        <p className="section__subtitle">A selection of my work</p>

        <div className="portfolio">
            {/* -- Portfolio Item 1-- */}
            <Link to="/outstandingly" className="portfolio__item">
                <img src="images/outstandingly.jpg" alt="description of project" className="portfolio__img" /> </Link>

                {/* Portfolio item 2  */}
                <Link to="/save-the-date" className="portfolio__item">
                    <img src="images/wedding.jpg" alt="" className="portfolio__img" />
                </Link>

                 {/* Portfolio item 3 */}
                <Link to="/nama-go-meditate" className="portfolio__item">
                    <img src="images/meditation.jpg" alt="" className="portfolio__img" />
                </Link>

                
        </div>
    </section>
            
        </div>
    )
}
