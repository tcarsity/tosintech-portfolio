import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import ServiceHero from "./ServiceHero";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { apiUrl, SUPABASE_BUCKET_URL } from "./http";
import "swiper/css";
import "swiper/css/pagination";
import WebDevServices from "./WebDevServices";
import { Link } from "react-router-dom";

const LatestProject = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch(apiUrl + "/get-projects", {
      method: "GET",
    });
    const result = await res.json();
    if (result.status == 200) {
      setProjects(result.data);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <Layout>
        <ServiceHero />

        <section className="section-4" id="project">
          <div className="container py-5">
            <div className="row pt-4">
              <div className="text-center">
                <h1>My Projects</h1>
                <p>Check out some of my recent projects and web applications</p>
              </div>
              <div className="col-md col-sm-12"></div>
              <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },

                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },

                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {projects &&
                  projects.map((project) => {
                    return (
                      <SwiperSlide>
                        <div
                          className="card shadow border-0 h-100 d-flex flex-column"
                          key={`project-${project.id}`}
                        >
                          <img
                            className="card-img-top"
                            src={
                              project.image
                                ? `${SUPABASE_BUCKET_URL}/projects/small/${project.image}`
                                : "/placeholder.png"
                            }
                            alt={project.title}
                          />
                          <div className="card-body p-4 d-flex flex-column flex-grow-1">
                            <h3 className="btn btn-primary btn-sm disabled rounded-pill h3 w-50">
                              {project.site}
                            </h3>
                            <h5 className="card-title mt-3">{project.title}</h5>

                            <p
                              className="card-text"
                              dangerouslySetInnerHTML={{
                                __html: project.content,
                              }}
                            ></p>
                            <div className="mt-auto">
                              <Link
                                to="https://github.com/tcarsity"
                                className="btn btn-primary rounded-pill  github"
                              >
                                View Code in Github
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </section>

        <WebDevServices />
      </Layout>
    </>
  );
};

export default LatestProject;
