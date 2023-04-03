import React from 'react';
import './App.scss';
import Intro from './section/Intro/Intro.js';
import About from './section/About/About.js';
import Features from './section/Features/Features.js';
import Team from './section/Team/Team.js';
import Portfolio from './section/Portfolio/Portfolio.js';
import Services from './section/Services/Services.js';
import Testimonials from './section/Testimonials/Testimonials.js';
import Pricing from './section/Pricing/Pricing.js';
import Faq from './section/FAQ/FAQ.js';
import Blog from './section/Blog/Blog.js';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <div className="Shell">
          <div className="Header_inner">

            <div className="Logo">
              <a href="/">
                Nitro
                <span>.</span>
              </a>
            </div>

            <div className="Nav">
              <ul>
                <li>
                  <a href="/" alt="Home">Home</a>
                </li>


                <li>
                  <a href="/" alt="About Us">About Us
                  <i className="material-icons">keyboard_arrow_down</i>
                  </a>
                  <div className="Nav_dropdown">
                    <ul>
                      <li>
                        <a href="/" alt="Team">Team</a>
                      </li>
                      <li>
                        <a href="/" alt="Pricing">Pricing</a>
                      </li>
                      <li>
                        <a href="/" alt="FAQ">FAQ</a>
                      </li>
                      <li>
                        <a href="/" alt="More Links">More Links
                          <i className="material-icons">keyboard_arrow_right</i>
                        </a>
                        <div className="Nav_dropdownSecond">
                          <ul>
                            <li>
                              <a href="Menu 1" alt="Menu 1">Menu 1</a>
                            </li>

                            <li>
                              <a href="Menu 2" alt="Menu 2">Menu 2</a>
                            </li>

                            <li>
                              <a href="Menu 3" alt="Menu 3">Menu 3</a>
                            </li>

                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>


                <li>
                  <a href="/" alt="Portfolio">Portfolio</a>
                </li>

                <li>
                  <a href="/" alt="Services">Services</a>
                </li>

                <li>
                  <a href="/" alt="Testimonials">Testimonials</a>
                </li>

                <li>
                  <a href="/" alt="Blog">Blog</a>
                </li>

                <li>
                  <a href="/" alt="Contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="NavBurger">
              <button> <h3 className="material-icons">menu</h3> </button>
            </div>

          </div>
        </div>
      </header>

      <Intro></Intro>
      <About></About>
      <Features></Features>
      <Team></Team>
      <Portfolio></Portfolio>
      <Services></Services>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
      <Faq></Faq>
      <Blog></Blog>


    </div>
  );
}

export default App;
