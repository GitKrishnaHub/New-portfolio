import React from "react";
import { profile1 } from "../images/index";
import Typical from "react-typical";

import "../Css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    
  
    <div className="Home" id="Home">
      <div className="home-content">
        <div className="profile">
          <img src={profile1} alt="..." />
        </div>
        <div className="text-data">
          <h4>Hello, It's Me</h4>
          <h1><span className="name">Kris</span>hna S</h1>
          <span>
            And I'm a{" "}
            <span className="skill">
              <Typical 
               wrapper="span"
      speed={100}
      style={{ fontSize: '2.1rem', display: 'flex' }}
                loop={Infinity}
                steps={[
                  "Frontend Developer",
                  10000,
                  "YouTuber",
                  8000,
                  "Gamer",
                  6000,
                ]}
              />
            </span>
          </span>
          <p>
            Knack of building application with frontend and backend operations.
          </p>
          <div className="btn-tab">
            <Link to="#contact">
              {" "}
              <button type="submit" className="btn1">
                Contact Me
              </button>
            </Link>
            <Link to={''}>
            <button type="submit" className="btn2">
              Download CV
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
