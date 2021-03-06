import React from 'react';
import './Intro.css';

export default function Intro() {
  return (
    <div>
      <section class="intro" id="home">
        <h1 class="section__title section__title--intro">
          Hi, I am <strong>Bre Thunholm</strong>
        </h1>
        <p class="section__subtitle section__subtitle--intro">
          frontend developer
        </p>
        <img
          src="images/bre-main.png"
          alt="Bre Thunholm"
          class="intro__img home"
        />
      </section>
    </div>
  );
}
