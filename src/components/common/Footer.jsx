import React, { useState } from "react";
import { toast } from "react-toastify";
import { apiUrl } from "./http";
import { useForm } from "react-hook-form";
import ShapeDividerTop from "../ShapeDividerTop";
import { Link } from "react-router-dom";

const Footer = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const res = await fetch(apiUrl + "/contact-now", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        if (result.status == true) {
          toast.success(result.message);
          reset();
        } else {
          toast.error(result.message);
        }
      });
  };
  return (
    <>
      <footer>
        <ShapeDividerTop />
        <div className="container py-5 ">
          <div className="row pt-4 ">
            <h1 className="text-center">Get In Touch</h1>

            <p className="text-center mt-2">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <div className="col-md-5 mt-4 col-sm-12 ">
              <div className="contact">
                <h3>Contact Information</h3>
                <p>
                  I'm open for new opportunities and collaborations, if you have
                  a project that needs my help please get in touch
                </p>
              </div>
              <div className="info">
                <div className="pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-envelope-at-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                  </svg>
                  <span className="ms-3">
                    Email <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; tosinoluwseun10@gmail.com
                  </span>
                </div>
                <div className="pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  <span className="ms-3">
                    Phone No. <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; +2349037450867, 09115932339.
                  </span>
                </div>

                <div className="pt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  <span className="ms-3">
                    Location <br />
                    &nbsp; &nbsp; &nbsp; &nbsp; Alimosho Lagos, Nigeria.
                  </span>
                </div>

                <div className="pt-4 icons">
                  <Link to="https://www.linkedin.com/in/tosin-olarewaju">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </Link>

                  <Link to="https://facebook.com/Tcarsity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-facebook ms-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </Link>

                  <Link to="https://twitter.com/tosin_olarewaju">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-twitter-x ms-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </Link>

                  <Link to="https://wa.me/09115932339">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-whatsapp ms-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-sm-12 foot">
              <div className="card shadow border-0 h-100">
                <div className="card-body">
                  <h3 className="card-title text-muted mess">
                    Send Me a Message
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} id="contact">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <label htmlFor=""></label>
                        <input
                          {...register("name", {
                            required: "The name field is required",
                          })}
                          type="text"
                          className={`form-control ${
                            errors.name && "is-invalid"
                          }`}
                          placeholder="Your Name"
                        />
                        {errors.name && (
                          <p className="invalid-feedback">
                            {errors.name?.message}
                          </p>
                        )}
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <label htmlFor=""></label>
                        <input
                          {...register("email", {
                            required: "The email field is required",

                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          type="text"
                          className={`form-control ${
                            errors.email && "is-invalid"
                          }`}
                          placeholder="Your Email"
                        />
                        {errors.email && (
                          <p className="invalid-feedback">
                            {errors.email?.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor=""></label>
                      <input
                        {...register("subject")}
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>

                    <div>
                      <label htmlFor=""></label>
                      <textarea
                        {...register("message", {
                          required: "The message field is required",
                        })}
                        rows={4}
                        className={`form-control  ${
                          errors.message && "is-invalid"
                        }`}
                        placeholder="Message"
                      ></textarea>
                      {errors.message && (
                        <p className="invalid-feedback">
                          {errors.message?.message}
                        </p>
                      )}
                    </div>
                    <div className="d-grid">
                      <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-primary mt-3 rounded-pill"
                      >
                        {loading == false ? "Send Message" : "Please wait..."}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="currentColor"
                          className="bi bi-send-fill ms-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="line">
              <hr className="mt-4" />
            </div>
            <div className="text-center copy">
              Copyright &copy; 2025 TosinTech. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
