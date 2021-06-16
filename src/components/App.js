import React from 'react';
import Header from './Header';
import Intro from './Intro';
import './App.css';
import Services from './Services';
import About from './About';
import Work from './Work';
import Footer from './Footer';


export default function App() {
    return (
        <div>
            <Header />
            <Intro />
            <Services />
            <About />
            <Work />
            <Footer />
        </div>
    )
}
