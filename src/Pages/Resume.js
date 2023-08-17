import React from "react";
import { code1,code2,code3,code4,code5,code6
,pro1,pro2,pro3,pro4, data1,data2,data3,data4 } from "../images";

import '../Css/Resume.css'
const Resume = () => {
  return (
    <div className="resume" id="resume">
        <div className="heading">
          <p>
            <span>My</span> Skills
          </p>
          <h4>My Skill & Service Details !</h4>
        </div>
      <div className="resume-container">
        <div className="skills-data">
          <div className="coding-skill">
            <div className="head">
              <p><span>Pro</span>graming</p>
            </div>
            <ul className="progressBar">
              <i>
                <img src={code1} alt="HTML-5"/>
                <input type="range"  className="range" defaultValue={'98'}/>
              </i>
              <i>
              <img src={code2} alt="CSS-3" />
                <input type="range"  className="range" defaultValue={'95'}/>
              </i>
              <i>
                <img src={code3} alt="JS" />
                <input type="range"  className="range" defaultValue={'85'}/>
              </i>
              <i>
                <img src={code4} alt="ReactJS" />
                <input type="range"  className="range" defaultValue={'90'}/>
              </i>
              <i>
                <img src={code5} alt="NodeJS" />
                <input type="range"  className="range" defaultValue={'80'}/>
              </i>
              <i>
                <img src={code6} alt="Python" />
                <input type="range"  className="range" defaultValue={'85'}/>
              </i>
            </ul>
          </div>

          <div className="coding-skill">
            <div className="head">
              <p><span>Pro</span>fessional</p>
            </div>
            <ul className="progressBar">
              <i>
                <img src={pro1} alt="..."/>
                <label>Full Stack Web Developer</label>
              </i>
              <i>
              <img src={pro2} alt="..." />
                <label>Frontend Developer</label>
              </i>
              <i>
                <img src={pro3} alt="..." />
                <label>Backend Developer</label>
              </i>
              <i>
                <img src={pro4} alt="..." />
                <label>Python Developer</label>
              </i>
            </ul>
          </div>
          <div className="coding-skill">
            <div className="head">
              <p><span>Data</span> Analyst</p>
            </div>
            <ul className="progressBar">
              <i>
                <img src={data1} alt="..."/>
                <label>Power Bi</label>
              </i>
              <i>
              <img src={data2} alt="..."/>
                <label>MongoDB</label>
              </i>
              <i>
              <img src={data3} alt="..."/>
                <label>My SQL</label>
              </i>
              <i>
              <img src={data4} alt="..."/>
                <label>Excel</label>
              </i>
              
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Resume;
