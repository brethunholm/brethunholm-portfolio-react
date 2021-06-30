import React from 'react';
import './ContactMe.css';

export default function ContactMe({ show, close }) {
    return (
        <div className="contact-card"
            style={{
                transform: show ? 'translateY(0vh)' : 'TranslateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            <div className="content">
  <div className="card">
    <div className="card__side card__side--front">
      {/* <!-- Front Content --> */}
      <div className="card__cont">
        <span className="blue">alert</span>
        <span>(<span className="green">'Contact Bre Thunholm'</span>)</span>
      </div>
    </div>
    <div className="card__side card__side--back">
      {/* <!-- Back Content --> */}
      <div className="card__cta">
      <button onClick={close} className="btn-cancel">x</button>
        <p><span className="purple">const</span> aboutMe <span className="cyan">=</span> &#123;
          <br />
          <span className="space red">name</span>
          <span className="cyan">:</span> <span className="green">'bre thunholm'</span>,
          <br/>
          <span className="space red">email</span>
          <span className="cyan">:</span>  <a href="mailto:bthunholm@gmail.com" className="green">'bthunholm@gmail.com'</a>,
          <br/>
          <span className="space red">resume</span>
          <span className="cyan">:</span>  <a href="https://app.box.com/s/rv3cjoxhq171kr3b242xiv1rc90fv949" className="green" target="_blank" rel="noopener noreferrer">'thunholm-resume'</a>,
          <br />
          <span className="space red">github</span><span className="cyan">:</span> <a className="green" href="https://github.com/brethunholm" target="_blank" rel="noopener noreferrer">'github.com/brethunholm'</a>
          <br/> 
          &#125;;
        </p>
      </div>
    </div>
   
  </div>
        </div>
        
        </div>
    )
}

