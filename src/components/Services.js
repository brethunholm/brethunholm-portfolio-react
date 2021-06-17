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
                <p>Highlight a project here ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat</p>
            </div> 

            <div class="service boxes" data-aos="fade-up">
                <h3>Front-end Developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat</p>
            </div> 

            <div class="service boxes" data-aos="fade-up">
                <h3>Third highlighted project</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat</p>
            </div> 

        </div> 

        <a href="#work" class="btn">My Work</a>
    </section>
        </StyledServices>
    )
}
