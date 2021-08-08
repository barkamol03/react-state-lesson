import React from "react";
import "./body.css";
import Img from "../Img/background-img.png";

class Body extends React.Component {
  render() {
    return (
      <div className="main-body">
        <div className="body-text">
          <h1>Barkamol Olimjonov</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            pariatur cum quisquam voluptates nulla repudiandae, molestias sit!
            Ducimus, molestiae.
          </p>
          <button className='btn'>Read More</button>
        </div>
      </div>
    );
  }
}

export default Body;
