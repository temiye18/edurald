import React from "react";
// import { AiOutlineStar } from "react-icons/ai";
import classes from "./Projects.module.css";
// import mtnLogo from "../../assets/mtn-logo.png";
import avanteLogo from "../../assets/avante-logo.png";
import armLogo from "../../assets/arm-logo.png";
import paydayLogo from "../../assets/payday-investor-logo.svg";
import simplexLogo from "../../assets/simplex-logo.png";

// const projects = [
//   {
//     id: 1,
//     logo: mtnLogo,
//   },
//   {
//     id: 2,
//     logo: armLogo,
//   },
//   {
//     id: 3,
//     logo: avanteLogo,
//   },
//   {
//     id: 4,
//     logo: paydayLogo,
//   },
//   {
//     id: 5,
//     logo: simplexLogo,
//   },
// ];

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

          <div className={`${classes.project__items} ${classes.payday}`}>
            <div className={classes.project__image}>
              <img src={paydayLogo} alt="" />
            </div>
            <ul>
              <li>
                Re-create the application with a new stack (from ionic to
                xamarin) for iPhone and Android market channels.
              </li>
              <li>
                Optimize the application for growth, plugging various marketing
                tools such as Facebook SDK, Firebase, one-Signal, branch.io etc.
                and in the process increasing transaction processing to the tune
                of over 2 billion.
              </li>
              <li>
                Tracking and fixing bugs found through the use of appcenter bug
                diagnostics.
              </li>
              <li>
                Tracking analytics and generating usage reports using tools like
                firebase, google analytics, mssql, appcenter analytics.
              </li>

              <li>Carry out system security analysis.</li>
              <li>
                Re-create the application with a new stack from xamarin to
                flutter (didn’t make it to production). For iPhone and Android
                market channel.
              </li>
            </ul>
          </div>

          <div className={classes.project__items}>
            <div className={classes.project__image}>
              <img src={avanteLogo} alt="" />
            </div>
            <ul>
              <li>
                Implemented a Knowledge Base Management system for several
                companies in the Telecoms and Banking sectors such as;
              </li>

              <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                MTN Nigeria, Access bank, Etisalat, Stanbic Pensions, Diamond
                Bank etc.
              </p>
              <li>
                Provided first level support and interfaced between clients and
                OEM for issues that required escalations.
              </li>
              <li>
                Implemented and provided support for a Customer Relations
                Management system, which includes email routers, chat channels
                and workflows with a software called eGain.
              </li>
              <li>
                Development of a customer loyalty app called MoLoyal using
                ionic.
              </li>
            </ul>
          </div>

          <div className={classes.project__items}>
            <div className={classes.project__image}>
              <img src={simplexLogo} alt="" />
            </div>
            <ul>
              <li>
                Implementation of several Enterprise Resource Planner products
                with full support to clients. Products include (Accounting
                softwares, Investment Management systems, Life Insurance system
                etc.)
              </li>
              <li>
                Implementation of enterprise wide Business Intelligence projects
                using Qlikview for various organizations across different
                industries.eg
              </li>
              <p style={{ fontSize: "1.3rem", fontWeight: "500" }}>
                Total Nigeria CPFA, Nestle Nigeria CPFA, Legacy Pensions,
                Meristem Wealth Management, ROSABON Financial Services, Equator
                Capital Limited, America International Insurance Company Capital
                (AIICO Capital), Zenith Capital.
              </p>

              <li>Helped several Pension Fund Administrators (PFAs) such as</li>
              <p style={{ fontSize: "1.3rem", fontWeight: "500" }}>
                AIICO Pensions (Lagos Nigeria), Legacy Pensions (Abuja Nigeria),
                Total Closed Pension Fund Administrators (Lagos Nigeria), Nestle
                Closed Pension Fund Administrators (Lagos Nigeria).
              </p>

              <h5 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                And Premium Pensions Limited PPL
              </h5>
              <p style={{ fontSize: "1.2rem" }}>
                In creating a valid report that they send to the Pension
                Commission (PENCOM) on a daily, weekly, monthly and quarterly
                basis through the use of my knowledge of SQL scripting. This
                helped them avoid paying hefty fines worth millions(billions
                when adjusted for inflation now) of naira in penalty for
                lateness fee.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
