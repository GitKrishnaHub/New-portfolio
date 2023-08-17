import React from 'react'
import '../Css/Project.css'
import {a1, a2, a3, a4, a5, a6, a7, gym1,gym10,gym11,gym12,gym2,gym3,gym4,gym5,gym6, gym7, gym8, gym9, n1, n2, n3, n4, p1, p2, p3, p4, p5} from '../images/index'
import YouTubeIcon from '@mui/icons-material/YouTube';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import { Link } from 'react-router-dom';

 const Project = () => {
 
 
  return (
    <div className='project' id='project'>
      <div className='heading'>
      <p>My <span>Projects</span></p>
      <h4>Using Multiple Programming Langauage !</h4>
    </div>
     
    <div className="project-info">
    <div className="project-data">
        <div className="card">
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src={gym1} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={gym2} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={gym3} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={gym4} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={gym5} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={gym6} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={gym7} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={gym8} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={gym9} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={gym10} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={gym11} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={gym12} className="d-block w-100 img" alt="..." />
            </div>
          </div>
        </div>
            <div className="img-data">
            <label ><span>GYM </span>MANAGEMENT SYSTEM</label>
            <p>In Gym management system I have used HTML, CSS, Javascript to get impressive user interface with responsive design 
              and for database I have used PHP Server and MYSQL XAMPP Control Software.
              In this app I have coverd all of the features of gym station.   
              <br></br> Click below Icon to see live / Youtube 
            </p>
            <div className="link">
           <Link to={'#project'} onClick={()=>{alert('Not Available')}}><abbr title="Watch Live"><OnlinePredictionIcon className='live'/></abbr></Link>
            <Link to={'https://www.youtube.com/watch?v=Kv_75cLQdDE&t=87s'} ><abbr title="Project Youtube Link"><YouTubeIcon className='youtube' /></abbr></Link>
            </div>

             </div>
        </div>
        <div className="card">
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src={n1} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={n2} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={n3} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={n4} className="d-block w-100 img" alt="..." />
            </div>
          </div>
        </div>
            <div className="img-data">
            <label ><span>Netflix</span> Clone</label>
            <p>In Netflix project I have used React.JS and tailwind CSS to get impressive user interface as a original Netflix with responsive design
              and also using MoviesDB API to fetch all diffrent categories of movie deatils like movies name, picture and Movie trails.
             <br></br>Click below Icon to see live / Youtube 
              </p>
            <div className="link">
           <Link to={'https://netflix-clone-37e5e.firebaseapp.com/'}><abbr title="Watch Live"><OnlinePredictionIcon className='live'/></abbr></Link>
            <Link to={'https://www.youtube.com/watch?v=ccGVLqAeOZA'}><abbr title="Project Youtube Link"><YouTubeIcon className='youtube' /></abbr></Link>
            </div>
            </div>
        </div>
        <div className="card">
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src={a1} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={a2} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={a3} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={a4} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={a5} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={a6} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={a7} className="d-block w-100 img" alt="..." />
            </div>
          </div>
        </div>
            <div className="img-data">
            <label ><span>Amazon</span> Clone</label>
            <p>In Amazon Clone I have used React.JS and tailwind CSS to get impressive user interface as a original Amazon with responsive 
              design and using Multiple react modules such as Redux, axios, Bootstrap 5v and also using product api to fetch the product details. 
              <br></br>Click below Icon to see live / Youtube 
              </p>
            <div className="link">
           <Link to={'https://clone-f66e4.firebaseapp.com/'}><abbr title="Watch Live"><OnlinePredictionIcon className='live'/></abbr></Link>
            <Link to={'https://youtu.be/nRaoSjhgFGE'}><abbr title="Project Youtube Link"><YouTubeIcon className='youtube' /></abbr></Link>
            </div>
            </div>
        </div>
        <div className="card">
        <div
          id="carouselExampleInterval"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="4000">
              <img src={p1} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={p2} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={p3} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={p4} className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <img src={p5} className="d-block w-100 img" alt="..." />
            </div>
          </div>
        </div>
            <div className="img-data">
            <label ><span>Prot</span>folio</label>
            <p>In Portfolio application I have used React.JS and CSS to get impressive user interface with responsive design.
              I have coverd all the professional details in this application with diffrent 
              categories such as About, skills, projects, contact details.
              <br></br>Click below Icon to see live / Youtube 
              </p>
            <div className="link">
           <Link to={''}><abbr title="Watch Live"><OnlinePredictionIcon className='live'/></abbr></Link>
            <Link to={'https://youtu.be/fOElmgGqlhE'}><abbr title="Project Youtube Link"><YouTubeIcon className='youtube' /></abbr></Link>
            </div>
            </div>
        </div>
      
        </div>
    </div>
    </div>
  )
}

export default Project
