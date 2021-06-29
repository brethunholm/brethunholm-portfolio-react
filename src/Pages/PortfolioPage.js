import React from 'react';
import Footer from '../components/Footer';
import './PortfolioPage.css';


export default function PortfolioPage({ projectTitle, projectLink, projectSubtitle, headerParagraph, bottomParagraph, src, img, projectUrl }) {
    console.log(projectUrl);
    return (
      <>
        <section className="intro" id="home" >
            <h1 className="section__title section__title--intro" >
                {projectTitle} 
                <strong className="long-word">{projectUrl}</strong></h1>
            <p className="section__subtitle section__subtitle--intro">{projectSubtitle}</p>
            <img src={img} alt="" className="intro__img" />
        </section>


            <div className="portfolio-item-individual">
                <p>{headerParagraph}</p>
            
                <a id="link" href={projectLink}>Check out project</a>
                {/* <iframe src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                   
                <iframe width="560" height="315" src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>{bottomParagraph}</p>


                
                 
             
                
            </div>
            <Footer />
            </>
    )
}