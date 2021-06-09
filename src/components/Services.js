import React from 'react'
import styled from 'styled-components';

const StyledServices = styled.div`
  background-image: url('img/services-background.jpg');
  background-size: cover;
  background-position: right;
  background-blend-mode: multiply;
`;


export default function Services() {
    return (
        <StyledServices>
             <section class="my-services" id="services">
        <h2 class="section__title section__title--services">What I do</h2>
        <div class="services">
            <div class="service">
                <h3>Project</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat</p>
            </div> 

            <div class="service">
                <h3>Another project</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat</p>
            </div> 

            <div class="service">
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
