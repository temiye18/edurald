import React from "react";
import classes from "./Projects.module.css";
import mtnLogo from "../../assets/mtn-logo.png";
import avanteLogo from "../../assets/avante-logo.png";
import armLogo from "../../assets/arm-logo.png";
import paydayLogo from "../../assets/payday-investor-logo.svg";
import simplexLogo from "../../assets/simplex-logo.png";

const projects = [
  {
    id: 1,
    logo: mtnLogo,
  },
  {
    id: 2,
    logo: armLogo,
  },
  {
    id: 3,
    logo: avanteLogo,
  },
  {
    id: 4,
    logo: paydayLogo,
  },
  {
    id: 5,
    logo: simplexLogo,
  },
];

const Projects = () => {
  return (
    <section className={classes.projects}>
      <div className="container">
        <h5>PROJECTS</h5>
        <h1>OUR WORK</h1>
        <div className={classes.projects__container}>
          <div className={classes.project__items}>
            <div className={classes.project__image}>
              <img src={armLogo} alt="" />
            </div>
            <ul>
              <li>
                We implemented a merger product between different arms of
                businesses for the group.
              </li>
              <li>
                We Manage the digital office software development process.
              </li>
              <li>
                Responsible for driving the delivery of web, mobile and USSD
                product channels.
              </li>
              <li>Maintaining source code versioning repositories.</li>

              <li>Ensure quality in products delivered.</li>
              <li>
                Coaching and mentoring team of engineers and other interns
                interested in technology and finance.
              </li>
            </ul>
          </div>

          <div className={classes.project__items}>
            <div className={classes.project__image}>
              <img src={avanteLogo} alt="" />
            </div>
            <ul>
              <li>
                We implemented a merger product between different arms of
                businesses for the group.
              </li>
              <li>
                We Manage the digital office software development process.
              </li>
              <li>
                Responsible for driving the delivery of web, mobile and USSD
                product channels.
              </li>
              <li>Maintaining source code versioning repositories.</li>

              <li>Ensure quality in products delivered.</li>
              <li>
                Coaching and mentoring team of engineers and other interns
                interested in technology and finance.
              </li>
            </ul>
          </div>

          <div className={classes.project__items}>
            <div className={classes.project__image}>
              <img src={mtnLogo} alt="" />
            </div>
            <ul>
              <li>
                We implemented a merger product between different arms of
                businesses for the group.
              </li>
              <li>
                We Manage the digital office software development process.
              </li>
              <li>
                Responsible for driving the delivery of web, mobile and USSD
                product channels.
              </li>
              <li>Maintaining source code versioning repositories.</li>

              <li>Ensure quality in products delivered.</li>
              <li>
                Coaching and mentoring team of engineers and other interns
                interested in technology and finance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
