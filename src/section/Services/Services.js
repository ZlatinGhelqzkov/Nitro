import React from 'react';
import './Services.scss';

function Services () {
	return(
    <div className="Services">
      <div className="Shell">
        <div className="Section_Head">
          <h2>Our Services</h2>
        </div>
        <div className="Section_Body">

          <div className="Services_inner">
            <div className="ServiceCard">
            <span class="material-icons">card_travel</span>
              <h3>Business Consulting</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perferendis quis molestiae vitae eligendi at.
               </p>
              <a href="/">Learn More</a>
            </div>

            <div className="ServiceCard">
            <span class="material-icons">trending_up</span>
              <h3>Market Analysis</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perferendis quis molestiae vitae eligendi at.
               </p>
              <a href="/">Learn More</a>
            </div>

            <div className="ServiceCard">
            <span class="material-icons">visibility</span>
              <h3>User Monitoring</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perferendis quis molestiae vitae eligendi at.
               </p>
              <a href="/">Learn More</a>
            </div>

            <div className="ServiceCard">
            <span class="material-icons">perm_device_information</span>
              <h3>Insurance Consulting</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perferendis quis molestiae vitae eligendi at.
               </p>
              <a href="/">Learn More</a>
            </div>

            <div className="ServiceCard">
            <span class="material-icons">show_chart</span>
              <h3>Financial Investment</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perferendis quis molestiae vitae eligendi at.
               </p>
              <a href="/">Learn More</a>
            </div>

            <div className="ServiceCard">
            <span class="material-icons">how_to_reg</span>
              <h3>Financial Management</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perferendis quis molestiae vitae eligendi at.
               </p>
              <a href="/">Learn More</a>
            </div>
          </div>

        </div>
      </div>
    </div>

);
}

export default  Services;
