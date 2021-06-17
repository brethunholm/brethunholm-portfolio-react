import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';


const StyledServices = styled.div`
  height: 90vh;
  width: 100%;
  background-color: #585858;
  background-image: url('images/services-background.jpg');
  background-size: cover;
  background-position: right;
  background-blend-mode: multiply;
`;


export default function Services() {
    useEffect(() => {
        Aos.init({
            duration:2000,
            once: true, 
        });
    }, [])
    return (
        <StyledServices>
             <section class="my-services grids" id="services">
        <h2 class="section__title section__title--services boxes" data-aos="slide-left">What I do</h2>
        <div class="services">
            <div class="service boxes" data-aos="fade-up">
                <h3>Designer</h3>
                <p>I value simple, clean and effective designs. A website should be designed for the people who will use it, so that is exactly what I do.</p>
            </div> 

            <div class="service boxes" data-aos="fade-up">
                <h3>Constantly Evolving</h3>
                <p> Coding mastery is a perpetually moving target. The opportunity to continuously experiment, learn and grow is my absolute favorite part of my job. I strive to continually learn new languages and expand my technical expertise as the field evolves. </p>
            </div> 

            <div class="service boxes" data-aos="fade-up">
                <h3> Developer</h3>
                <p>I enjoy bringing ideas to life in the browser. My current tech stack includes HTML5, CSS3, React / Redux and GatsbyJS.</p>
            </div> 

            

        </div> 

        <a href="#work" class="btn">My Work</a>
    </section>
        </StyledServices>
    )
}
