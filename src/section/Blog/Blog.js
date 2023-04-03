import React from 'react';
import './Blog.scss';
import Img_1 from '../../assets/img_1.jpg';
import Img_4 from '../../assets/img_4.jpg';
import Img_3 from '../../assets/img_3.jpg';

function Blog () {
	return(
	<div className="Blog">
	 <div className="Shell">
		<div className="Section_Head">
      <h2>Our Blog</h2>
		</div>
		<div className="Section_Body">
			<div className="Blog_inner">
	      <div className="BlogCard">
	        <img src={Img_1} alt="BlogSnapshot"/>
	        <a href="/" alt="HTML School">Where Do You Learn HTML & CSS in 2019?</a>
	        <div className="Date">
						<p>Ham Brook</p>
	          <span> </span>
						<p>Jan 18, 2019</p>
	          <span> </span>
	          <a href="/" alt="News">News</a>
	        </div>
	        <p>
	          Lorem ipsum dolor sit amet consectetur adipisicing elit.
	          Natus eligendi nobis ea maiores sapiente veritatis
	          reprehenderit suscipit quaerat rerum voluptatibus a eius.
	        </p>
	        <a href="/" alt="Read More">Continue Reading...</a>
	      </div>

				<div className="BlogCard">
	        <img src={Img_4} alt="BlogSnapshot"/>
	        <a href="/" alt="HTML School">Where Do You Learn HTML & CSS in 2019?</a>
	        <div className="Date">
						<p>Ham Brook</p>
	          <span> </span>
						<p>Jan 18, 2019</p>
	          <span> </span>
	          <a href="/" alt="News">News</a>
	        </div>
	        <p>
	          Lorem ipsum dolor sit amet consectetur adipisicing elit.
	          Natus eligendi nobis ea maiores sapiente veritatis
	          reprehenderit suscipit quaerat rerum voluptatibus a eius.
	        </p>
	        <a href="/" alt="Read More">Continue Reading...</a>
	      </div>


				<div className="BlogCard">
	        <img src={Img_3} alt="BlogSnapshot"/>
	        <a href="/" alt="HTML School">Where Do You Learn HTML & CSS in 2019?</a>
	        <div className="Date">
						<p>Ham Brook</p>
	          <span> </span>
						<p>Jan 18, 2019</p>
	          <span> </span>
	          <a href="/" alt="News">News</a>
	        </div>
	        <p>
	          Lorem ipsum dolor sit amet consectetur adipisicing elit.
	          Natus eligendi nobis ea maiores sapiente veritatis
	          reprehenderit suscipit quaerat rerum voluptatibus a eius.
	        </p>
	        <a href="/" alt="Read More">Continue Reading...</a>
	      </div>


		 </div>
		</div>
	 </div>
	</div>

);
}

export default Blog ;
