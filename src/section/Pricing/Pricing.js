import React from 'react';
import './Pricing.scss';

function Pricing () {
	return(
	<div className="Pricing">
	 <div className="Shell">
		<div className="Section_Head">
      <h2>Pricing</h2>
		</div>
		<div className="Section_Body">
			<div className="Pricing_inner">
	      <div className="PricingCard Basic">
	        <h3>Basic</h3>
	        <h2>$47</h2>
	        <ul>
	          <li>
	            <p>Officia quaerat eaque neque</p>
	            <p>Possimus aut consequuntur incidunt</p>
	            <p>Lorem impsum dolor sit amet</p>
	            <p>Consectetur adipiscing elit</p>
	            <p>Dolorum esse odio architecto sint</p>
	          </li>
	        </ul>
	        <a className="Btn_primary" href="/" alt="BuyButton">Buy Now</a>
	      </div>

	      <div className="PricingCard Premium">
	        <h3>Premium</h3>
	        <h2>$200</h2>
	        <ul>
	          <li>
	            <p>Officia quaerat eaque neque</p>
	            <p>Possimus aut consequuntur incidunt</p>
	            <p>Lorem impsum dolor sit amet</p>
	            <p>Consectetur adipiscing elit</p>
	            <p>Dolorum esse odio architecto sint</p>
	          </li>
	        </ul>
	        <a className="Btn_primary" href="/" alt="BuyButton">Buy Now</a>
	      </div>

	      <div className="PricingCard Professional">
	        <h3>Basic</h3>
	        <h2>$750</h2>
	        <ul>
	          <li>
	            <p>Officia quaerat eaque neque</p>
	            <p>Possimus aut consequuntur incidunt</p>
	            <p>Lorem impsum dolor sit amet</p>
	            <p>Consectetur adipiscing elit</p>
	            <p>Dolorum esse odio architecto sint</p>
	          </li>
	        </ul>
	        <a className="Btn_primary" href="/" alt="BuyButton">Buy Now</a>
	      </div>
			</div>
		</div>
	 </div>
	</div>

);
}

export default Pricing;
