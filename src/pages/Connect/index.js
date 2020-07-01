import React from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from '../../docs/GarrettGassensmith_Resume.pdf';

function Connect() {
  AOS.init({
    easing: "ease-in-out-back",
  });

  return (
    <div className="container">
      <div
        className="title"
        data-aos="fade-right"
        data-aos-easing="ease-in-out-back"
        data-aos-duration="800"
      >
        FOLLOW ME
      </div>
      <section id="connect" className="row">
        <div className="col s12 m4 center social-link" data-aos="fade-up" data-aos-easing="ease-in-out-back" data-aos-duration="1200">
          <a className="" href="https://github.com/gmg300">
            <i className="fab fa-github hvr-float"></i>
            <div className="icon">Github</div>
          </a>
        </div>
        <div className="col s12 m4 center social-link" data-aos="fade-up" data-aos-easing="ease-in-out-back" data-aos-duration="1500">
          <a
            className=""
            href="https://www.linkedin.com/in/garrett-gassensmith-5ab01880/"
          >
            <i className="fab fa-linkedin hvr-float"></i>
            <div className="icon">LinkedIn</div>
          </a>
        </div>
        <div className="col s12 m4 center social-link" data-aos="fade-up" data-aos-easing="ease-in-out-back" data-aos-duration="1800">
          <a className="" href={Resume}>
            <i className="far fa-file-alt hvr-float"></i>
            <div className="icon">Resume</div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Connect;
