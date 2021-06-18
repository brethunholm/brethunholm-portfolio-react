import React from 'react'

export default function Work() {
    return (
        <div>
              <section className="my-work" id="work">
        <h2 className="section__title">My Work</h2>
        <p className="section__subtitle">A selection of my work</p>

        <div className="portfolio">
            {/* -- Portfolio Item 1-- */}
            <a href="./portfolio-item-1.html" className="portfolio__item">
                <img src="images/outstandingly.jpg" alt="description of project" className="portfolio__img" /> </a>

                {/* Portfolio item 2  */}
                <a href="./portfolio-item-2.html" className="portfolio__item">
                    <img src="images/wedding.jpg" alt="" className="portfolio__img" />
                </a>

                 {/* Portfolio item 3 */}
                <a href="./portfolio-item-3.html" className="portfolio__item">
                    <img src="images/meditation.jpg" alt="" className="portfolio__img" />
                </a>

                
        </div>
    </section>
            
        </div>
    )
}
