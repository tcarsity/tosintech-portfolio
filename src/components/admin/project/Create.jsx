import React, { useState, useRef, useMemo } from "react";
import Layout from "../../common/Layout";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../common/Sidebar";
import { apiUrl, token } from "../../common/http";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import { resizeImage } from "../../../utils/imageResize";

const Create = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [imageId, setImageId] = useState(null);

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "",
    }),
    [placeholder]
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newData = { ...data, content: content, imageId: imageId };
    const res = await fetch(apiUrl + "/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify(newData),
    });
    const result = await res.json();
    if (result.status == 200) {
      toast.success(result.message);
      navigate("/admin/projects");
    } else {
      toast.error(result.message);
    }
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const resizedImage = await resizeImage(file, 1200);

      const formData = new FormData();
      formData.append("image", resizedImage);

      const res = await fetch(apiUrl + "/temp-images", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: formData,
      });

      const result = await res.json();

      if (!result.status) {
        toast.error(result.errors || "Image upload failed");
        return;
      }

      setImageId(result.data.id);
    } catch (error) {
      console.error(error);
      toast.error("Image processing failed");
    }
  };
  return (
    <>
      <Layout>
        <div className="container py-5">
          <div className="row">
            <div className="d-flex justify-content-between mt-5 pb-3">
              <h4 className="h4 pb-0 mb-0">Projects / Create</h4>
              <Link to="/admin/projects" className="btn btn-primary">
                Back
              </Link>
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>

            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md">
                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            Title
                          </label>
                          <input
                            {...register("title", {
                              required: "The title field is required",
                            })}
                            type="text"
                            className={`form-control ${
                              errors.title && "is-invalid"
                            }`}
                            placeholder="Title"
                          />

                          {errors.title && (
                            <p className="invalid-feedback">
                              {errors.title?.message}
                            </p>
                          )}
                        </div>

                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            Site
                          </label>
                          <input
                            {...register("site", {
                              required: "The site field is required",
                            })}
                            type="text"
                            className={`form-control ${
                              errors.site && "is-invalid"
                            }`}
                            placeholder="Site"
                          />

                          {errors.site && (
                            <p className="invalid-feedback">
                              {errors.site?.message}
                            </p>
                          )}
                        </div>

                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            Content
                          </label>
                          <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            Image
                          </label>
                          <br />
                          <input onChange={handleFile} type="file" />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="" className="form-label">
                            Status
                          </label>
                          <select
                            {...register("status")}
                            className="form-control"
                          >
                            <option value="1">Active</option>
                            <option value="0">Block</option>
                          </select>
                        </div>

                        <button
                          disabled={isDisable}
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Create;
