import React from 'react';
import './Features.scss';
import Hero3 from '../../assets/slide_2.jpg';


function Features () {

  return (
      <div className="Features">
        <div className="Shell">
          <div className="Section_Head">
            <h2>Our Features</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Minus minima neque tempora reiciendis.
            </p>
          </div>

          <div className="Section_Body">
            <div className="Features_inner">
              <div className="Slider">
                <img src={Hero3} alt="FeaturesSlide"/>
                <div className="SliderAction">
                  <a className="ActionPrev" href="/">←</a>
                  <a className="ActionNext" href="/">→</a>
                </div>
              </div>
              <div className="Features_content">
                <h1>Do things with love</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis
                ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.
                </p>
                <a className="Btn_primary" href="/">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );

}

export default Features;
