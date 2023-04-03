import React from 'react';
import './Testimonials.scss';
import Robert from '../../assets/person_4.jpg';

function Testimonials () {
	return(
	<div className="Testimonials">
	 <div className="Shell">
		<div className="Section_Head">
      <h2>Testimonials</h2>
      <p className="">
        “Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae
        explicabo animi minima fuga beatae illum eligendi incidunt consequatur.
        Amet dolores excepturi earum unde iusto.”
      </p>
		</div>
		<div className="Section_Body">
      <div className="HeadshotQuote">
        <img src={Robert} alt="Headshot"/>
        <p>Robert Spears</p>
      </div>
      <div className="PageCounter">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

		</div>
	 </div>
	</div>

);
}

export default Testimonials;
