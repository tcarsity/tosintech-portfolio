import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { apiUrl, SUPABASE_BUCKET_URL } from "./http";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLatestProjects = async () => {
    try {
      const res = await fetch(apiUrl + "/get-latest-projects?limit=4", {
        method: "GET",
      });
      const result = await res.json();
      if (result.status == 200) {
        setProjects(result.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestProjects();
  }, []);

  return (
    <section className="section-4" id="project">
      <div className="container py-5">
        <div className="row pt-4">
          <div className="text-center">
            <h1>My Projects</h1>

            <p>Check out some of my recent projects and web applications</p>
          </div>

          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            breakpoints={{
              200: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
          >
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <SwiperSlide key={`skeleton-${i}`}>
                    <div className="card shadow border-0 h-100 d-flex flex-column">
                      <div className="skeleton-img"></div>

                      <div className="card-body p-4">
                        <div className="skeleton-line w-50 mb-3"></div>
                        <div className="skeleton-line w-75 mb-2"></div>
                        <div className="skeleton-line w-100 mb-2"></div>
                        <div className="skeleton-line w-25 mt-4"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : projects.map((project) => (
                  <SwiperSlide key={`project-${project.id}`}>
                    <div className="card shadow border-0 h-100 d-flex flex-column">
                      <img
                        className="card-img-top"
                        src={
                          project.image
                            ? `${SUPABASE_BUCKET_URL}/portfolio/projects/small/${project.image}`
                            : "/placeholder.png"
                        }
                        alt={project.title}
                      />

                      <div className="card-body p-4 d-flex flex-column flex-grow-1">
                        <h3 className="btn btn-primary btn-sm disabled rounded-pill">
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
                            className="btn btn-primary rounded-pill btn-sm github"
                          >
                            View Code in Github
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
