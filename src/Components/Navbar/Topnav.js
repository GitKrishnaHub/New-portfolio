import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import EmailIcon from "@mui/icons-material/Email";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import { card1, card2, card3, card4, card5, card6, card7 } from "../../images/index";
import "./Navbar.css";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Resume from "../../Pages/Resume";
import Project from "../../Pages/Project";
import Contact from "../../Pages/Contact";


const Topnav = () => {
  return (
    <div className="Container " id="Home">
   
      <div className=" float-img ">
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src={card1} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={card2} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={card3} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={card4} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={card5} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={card6} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={card7} className="d-block w-100 img" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="container-data">
        <div className="top-data">
          <div className="top-nav">
            <div className="nav-logo">
              <h3>
                Kris<span className=" logo">hna ' s</span>{" "}
              </h3>
            </div>
            <div className="social">
              <Link to="https://www.instagram.com/krishnakkmrs/">
                <InstagramIcon className="instagram" />
              </Link>
              <Link to="https://www.youtube.com/channel/UCAn4hQDqyaleayqZ4Ytq9Yw">
                <YouTubeIcon className="youtube" />
              </Link>
              <Link to="https://www.linkedin.com/in/krishna-kumar-0145b6153/">
                <LinkedInIcon className="linkedin" />
              </Link>
              <Link to="https://github.com/GitKrishnaHub">
                <GitHubIcon className="github" />
              </Link>
            </div>
          </div>
        </div>

        <div className="nav-data">
          <div className="side-nav">
            <ul className="nav_Content">
              <i className="nav_items">
                <Link to="#Home">
                  <HomeIcon className="home" />
                </Link>
                <Link to="#About">
                  <PersonIcon className="person" />
                </Link>
                <Link to="#resume">
                  <DataUsageIcon className="data" />
                </Link>
                <Link to="#project">
                  <HomeRepairServiceIcon className="service" />
                </Link>
                <Link to="#contact">
                  <EmailIcon className="email" />
                </Link>
              </i>
            </ul>
          </div>
        </div>
      </div>
     <Home/>
     <About/>
     <Resume/>
     <Project/>
     <Contact/>
    </div>
     
  );
};

export default Topnav;
