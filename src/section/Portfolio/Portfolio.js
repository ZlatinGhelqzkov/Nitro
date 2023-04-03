import React from 'react';
import './Portfolio.scss';
import Img1 from '../../assets/img_1.jpg';
import Img2 from '../../assets/img_2.jpg';
import Img3 from '../../assets/img_3.jpg';
import Img4 from '../../assets/img_4.jpg';
import Img5 from '../../assets/img_5.jpg';
import Img6 from '../../assets/img_6.jpg';
import Img7 from '../../assets/img_7.jpg';
import Img8 from '../../assets/img_8.jpg';
import Img9 from '../../assets/img_9.jpg';
import Img10 from '../../assets/img_10.jpg';
import Img11 from '../../assets/img_11.jpg';
import Img12 from '../../assets/img_12.jpg';
import Img13 from '../../assets/img_13.jpg';

function Portfolio () {
  return(
      <div className="Portfolio">
        <div className="Shell">
          <div className="Section_Head">
            <h2>Portfolio</h2>
            <ul className="PortfolioBtn">
              <li>
                <a className="Btn_secondary" href="/" alt="PortfolioButton">All</a>
              </li>
              <li>
                <a className="Btn_secondary" href="/" alt="PortfolioButton">Web</a>
              </li>
              <li>
                <a className="Btn_secondary" href="/" alt="PortfolioButton">Design</a>
              </li>
              <li>
                <a className="Btn_secondary" href="/" alt="PortfolioButton">Brand</a>
              </li>
            </ul>
          </div>
          <div className="Section_Body">
            <div className="Masonry">

              <div className="FadeAction">
                <img src={Img1} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img2} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img3} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img4} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img5} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img6} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img7} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img8} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img10} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img9} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img11} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img12} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>

              <div className="FadeAction">
                <img src={Img13} alt="PortfolioGallery"/>
                <div className="FadeContent">
                  <a href="/" alt="Learn More">
                    <span class="material-icons">search</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




  );
}

export default Portfolio;
