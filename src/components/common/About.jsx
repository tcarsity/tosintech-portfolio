import React from "react";
import heroImg2 from "../../assets/images/about.png";
import ShapeDivider from "../ShapeDivider";

const About = () => {
  return (
    <>
      <section className="section-2" id="about">
        <div className="container py-5">
          <div className="row pt-4 head">
            <h1 className="text-center about">About Me</h1>
            <div className="col-md-6 mt-3 col-sm-12 ">
              <img src={heroImg2} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 col-sm-12 mt-2 d-flex justify-content-center align-items-center mt-2">
              <div className="about-content">
                <h2>FullStack Web Developer</h2>
                <p>
                  I’m a full-stack web developer who enjoys building reliable,
                  real-world applications—not just features that work once, but
                  systems that hold up over time. I work primarily with Laravel
                  and React, and I’m especially interested in authentication,
                  security, performance, and user experience. I care a lot about
                  how users interact with an application, but I care just as
                  much about what’s happening behind the scenes—session
                  handling, access control, error states, and deployment
                  stability.
                </p>
                <p>
                  Over time, I’ve worked on projects that required more than
                  just “writing code.” Things like: Designing role-based
                  authentication (admin / super admin) Handling session timeouts
                  and inactive users correctly Building defensive UX for slow or
                  unstable networks Logging security events properly (IP, user
                  agent, activity) Deploying and maintaining apps using Docker,
                  Render, and PostgreSQL Debugging production issues instead of
                  avoiding them Whether I’m working on a church platform, an
                  admin dashboard, or a client project, my goal is always the
                  same: build something clean, secure, and maintainable. I’m
                  open to full-time roles, contract work, and freelance
                  projects, especially where I can take ownership, improve
                  existing systems, or help turn a rough idea into a solid
                  product.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ShapeDivider />
      </section>
    </>
  );
};

export default About;
