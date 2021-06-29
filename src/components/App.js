import React from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Header from './Header';
import Intro from './Intro';
import './App.css';
import Services from './Services';
import About from './About';
import Work from './Work';
import PortfolioPage from '../Pages/PortfolioPage';
import data from './portfolioPageData';
import Footer from './Footer';
const { outstandingly, wedding, meditation } = data;
// import ContactMe from './ContactMe';


export default function App() {
    return (
        <Router>
            <Route path="/" exact >
        <div>
            <Header />
            <Intro />
            <Services />
            <About />
            <Work />
            <Footer />
        </div>
        </Route>
        <Route path="/outstandingly">
        <PortfolioPage projectTitle={outstandingly.projectTitle} projectLink={outstandingly.projectLink} projectSubtitle={outstandingly.projectSubtitle} headerParagraph={outstandingly.headerParagraph} bottomParagraph={outstandingly.bottomParagraph} projectUrl={outstandingly.projectUrl} src={outstandingly.src} img={outstandingly.img}/>
        </Route>
        <Route path="/save-the-date">
        <PortfolioPage projectTitle={wedding.projectTitle} projectLink={wedding.projectLink} projectSubtitle={wedding.projectSubtitle} headerParagraph={wedding.headerParagraph} bottomParagraph={wedding.bottomParagraph} projectUrl={wedding.projectUrl}src={wedding.src} img={wedding.img}/>
        </Route>
        <Route path="/nama-go-meditate">
        <PortfolioPage projectTitle={ meditation.projectTitle} projectLink={ meditation.projectLink} projectSubtitle={ meditation.projectSubtitle} headerParagraph={meditation.headerParagraph} bottomParagraph={meditation.bottomParagraph} projectUrl={meditation.projectUrl}src={meditation.src} img={meditation.img}/>
        </Route>
        </Router>
    )
}
