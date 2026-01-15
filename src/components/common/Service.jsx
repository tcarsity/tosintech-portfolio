import React from "react";
import developer from "../../assets/images/developer.jpg";
import creative from "../../assets/images/creative.jpg";
import quality from "../../assets/images/quality.jpg";

const Service = () => {
  return (
    <section className="service">
      <div className="container py-5">
        <h1 className="text-center">Services</h1>
        <p className="text-center">End-to-End Solutions.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card border-0 h-100">
              <img
                src={developer}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body p-4">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  We build fast, responsive, and scalable websites tailored to
                  your business goals. From clean code to seamless user
                  experience, our web development services ensure your site not
                  only looks great but performs flawlessly across all devices.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 h-100">
              <img
                src={creative}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body p-4">
                <h5 className="card-title">Creative Design</h5>
                <p className="card-text">
                  We bring ideas to life through bold, eye catching design. From
                  brand identities and marketing materials to UI/UX interfaces,
                  our creative design services blend aesthetics with purpose.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 h-100">
              <img src={quality} className="card-img-top img-fluid" alt="..." />
              <div className="card-body p-4">
                <h5 className="card-title">High Quality</h5>
                <p className="card-text">
                  We are committed to delivering work that meets the highest
                  standards with every pixel, every line of code, every
                  interaction. Quality isn't just a promise, it's our process.
                  From concept to final delivery, we focus on precision,
                  performance, and polish to ensure your project stands out and
                  stands strong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
