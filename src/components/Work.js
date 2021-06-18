import React from 'react'

export default function Work() {
    return (
        <div>
              <section className="my-work" id="work">
        <h2 className="section__title">My Work</h2>
        <p className="section__subtitle">A selection of my work</p>

        <div className="portfolio">
            {/* -- Portfolio Item 1-- */}
            <a href="/outstandingly" className="portfolio__item">
                <img src="images/outstandingly.jpg" alt="description of project" className="portfolio__img" /> </a>

                {/* Portfolio item 2  */}
                <a href="/save-the-date" className="portfolio__item">
                    <img src="images/wedding.jpg" alt="" className="portfolio__img" />
                </a>

                 {/* Portfolio item 3 */}
                <a href="/nama-go-meditate" className="portfolio__item">
                    <img src="images/meditation.jpg" alt="" className="portfolio__img" />
                </a>

                
        </div>
    </section>
            
        </div>
    )
}
