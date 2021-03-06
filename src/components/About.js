import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    // slide in effect for about me section 
    useEffect(() => {
        Aos.init({duration:2000});
    }, [])
    return (
        <div>
                <section className="about-me grids" id="about">
        <h2 className="section__title section__title--about ">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Developer based in Minneapolis, MN</p>

        <div className="about-me__body boxes" data-aos="fade">
            <p>Hi I’m Bre, it is wonderful to meet you! As a science educator turned coder, I have always found joy in finding creative ways to communicate complex subjects simply and effectively to others. I am a driven front-end developer with a passion for thoughtful UI design, collaboration, and life-long learning. </p>

            <p>I look forward to working on a team that is committed to using technology to make the world a better place.</p>
        </div>

        <img src="images/bremnt.png" alt="" className="about-me__img boxes" data-aos="zoom-in-left" />
    </section>
            
        </div>
    )
}
