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
            <div className="col-md-6 col-sm-12 mt-2 d-flex justify-content-center align-items-center ">
              <div className="about-content">
                <h2>FullStack Web Developer</h2>
                <p>
                  I'm a passionate web developer with 5 years of experience
                  creating beautiful, functional, and user-centered digital
                  experiences. I am always looking to learn new technologies and
                  improve my skills.
                </p>
                <p>
                  With a strong foundation of both backend and front-end
                  development and a keen eye for design, I create websites that
                  not only look great but also provide exceptional user
                  experiences. I'm dedicated to writing clean, optimized code
                  and using modern development practices.
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
