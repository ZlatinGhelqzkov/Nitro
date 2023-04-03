import React from 'react';
import './FAQ.scss';
import About from '../../assets/about_1.jpg';

function FAQ () {
	return(
	<div className="FAQ">
	 <div className="Shell">
		<div className="Section_Head">
      <h2> Frequently Asked Questions</h2>
		</div>
		<div className="Section_Body">
      <div className="FAQ_inner">
        <div className="QuestionCard">
          <h3>Can i accept both Paypal and Stripe?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam assumenda eum blanditiis perferendis.
           </p>
        </div>

        <div className="QuestionCard">
          <h3>What available is refund period?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam assumenda eum blanditiis perferendis.
           </p>
        </div>

        <div className="QuestionCard">
          <h3>Can i accept both Paypal and Stripe?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam assumenda eum blanditiis perferendis.
           </p>
        </div>

        <div className="QuestionCard">
          <h3>What available is refund period?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aliquam assumenda eum blanditiis perferendis.
           </p>
        </div>
				<div className="FAQ_lower">
					<div className="FAQ_image">
		        <img src={About} alt="FaqTeam"/>
					</div>
					<div className="FAQ_content">
		        <div className="ServiceCard ServCardsecondary">
		        <span class="material-icons">card_travel</span>
		          <h3>Web and Mobile Specialties</h3>
		          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
		           Perferendis quis.
		           </p>
		          <a href="/">Learn More</a>
		        </div>

		        <div className="ServiceCard ServCardsecondary">
		        <span class="material-icons">visibility</span>
		          <h3>Intuitive Thinkers</h3>
		          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
		           Perferendis quis.
		           </p>
		          <a href="/">Learn More</a>
		        </div>
					</div>
				</div>
      </div>
		</div>
	 </div>
	</div>

);
}

export default FAQ;
