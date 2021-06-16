import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <div>
                <section class="about-me grids" id="about">
        <h2 class="section__title section__title--about ">Who I am?</h2>
        <p class="section__subtitle section__subtitle--about">Developer based in Kihei, HI</p>

        <div class="about-me__body boxes" data-aos="fade">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat</p>
        </div>

        <img src="images/bremnt.png" alt="" class="about-me__img boxes" data-aos="zoom-in-left" />
    </section>
            
        </div>
    )
}
