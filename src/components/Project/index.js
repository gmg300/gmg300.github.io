import React from "react";
import "./style.css";
import AOS from "aos";
import 'aos/dist/aos.css';
// import BudgetTrackerImg from '../../images/budget-tracker-s.jpg';
// import CodeQuizImg from '../../images/code-quiz-s.jpg';
// import FitnessTrackerImg from '../../images/fitness-tracker-s.jpg';
// import NoteTakerImg from '../../images/note-taker-s.jpg';
// import PasswordGeneratorImg from '../../images/password-generator-s.jpg';
// import ShakerImg from '../../images/shaker-s.jpg';
// import TeamProfileGeneratorImg from '../../images/team-profile-generator-s.jpg';
// import TheCodingLibraryImg from '../../images/the-coding-library-s.jpg';
// import UserDirectoryImg from '../../images/user-directory-s.jpg';
// import WeatherDashboardImg from '../../images/weather-dashboard-s.jpg';
// import WorkDayPlannerImg from '../../images/work-day-planner-s.jpg';

function Project({ img, title, description, repo, page, delay }) {
 
  AOS.init({});

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="ease-in-out-back" data-aos-duration={delay}>
      <div className="col m6 l4 z-depth-5">
        <div className="profile image hvr-shrink">
          <img src={process.env.PUBLIC_URL + '/images' + img} alt="Garrett Gassensmith" />
          <div className="text">
            <h4>{title}</h4>
            <p className="proj-description">{description}</p>
            <p className="btn project-link hvr-grow">
              <a className="" href={repo}>
                Github
              </a>
            </p>
            <p className="btn project-link hvr-grow">
              <a className="" href={page}>
                Live Page
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
