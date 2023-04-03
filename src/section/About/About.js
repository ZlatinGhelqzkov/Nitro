import React from 'react';
import './About.scss';
import Hero from '../../assets/hero_1.jpg';


function About(){

  return (
      <div className="About">
        <div className="Shell">
          <div className="Section_Head">
            <h2> About Us </h2>
          </div>

          <div className="Section_Body">
            <div className="About_inner">
              <div className="About_image">
                <img src={Hero} alt="AboutHero"/>
              </div>
              <div className="About_content">
                <h3> For the next great business</h3>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quo tempora cumque eligendi in nostrum labore omnis quaerat.
                </p>

                <ul>
                  <li>
                    Officia quaerat eaque neque
                  </li>

                  <li>
                    Possimus aut consequuntur incidunt
                  </li>

                  <li>
                    Lorem ipsum dolor sit amet
                  </li>

                  <li>
                    Consectetur adipisicing elit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

  );

}

export default About;
