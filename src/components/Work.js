import React from 'react'

export default function Work() {
    return (
        <div>
              <section class="my-work" id="work">
        <h2 class="section__title">My Work</h2>
        <p class="section__subtitle">A selection of my work</p>

        <div class="portfolio">
            {/* -- Portfolio Item 1-- */}
            <a href="./portfolio-item-1.html" class="portfolio__item">
                <img src="images/wedding.png" alt="description of project" class="portfolio__img" /> </a>

                {/* Portfolio item 2  */}
                <a href="./portfolio-item-2.html" class="portfolio__item">
                    <img src="images/refi.png" alt="" class="portfolio__img" />
                </a>

                 {/* Portfolio item 3 */}
                <a href="./portfolio-item-3.html" class="portfolio__item">
                    <img src="images/yoda.png" alt="" class="portfolio__img" />
                </a>

                 {/* Portfolio item 4 */}
                <a href="#" class="portfolio__item">
                    <img src="images/calc.png" alt="" class="portfolio__img" />
                </a>

               {/* Portfolio item 5  */}
                <a href="#" class="portfolio__item">
                    <img src="images/drawman.png" alt="" class="portfolio__img" />
                </a>

                 {/* Portfolio item 6  */}
                <a href="#" class="portfolio__item">
                    <img src="images/jelly.png" alt="" class="portfolio__img" />
                </a>
        </div>
    </section>
            
        </div>
    )
}
