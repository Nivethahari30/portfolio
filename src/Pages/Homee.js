import React from "react";
import { useNavigate } from "react-router-dom";
import "./Page.css";
import "../App.css";

const MyPage = () => {
  const Navigate = useNavigate();
  const handleprojects = () => {
    Navigate("/Project");
  };
  const handlecontact = () => {
    Navigate("/Contact");
  };
  return (
    <div className="home ms-3">
      {/* Image as background */}
      <div
        className="image-container"
        style={{ marginTop: "200px", marginLeft: "500px" }}
      ></div>

      <div className="content">
        <div className="row">
          <h2>Hi, I'm Nivetha</h2>
          <h1>MERN Stack Developer</h1>
          <h4>
            I’m a dedicated web developer skilled in the MERN stack with a strong
            passion for crafting seamless user experiences. I specialize in
            building dynamic and responsive web applications, and I enjoy solving
            real-world problems through code.
          </h4>
        </div>
        <button className="mt-2 btn btn-info ms-4" onClick={handleprojects}>
          Hire Me
        </button>
        <button className="ms-2 mt-2 btn btn-info" onClick={handlecontact}>
          Let's Talk
        </button>
      </div>

      {/* Replace <box-icon> with an <i> tag */}
      <div style={{ marginTop: "20px" }}>
        <a
          href="https://github.com/Nivethahari30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github bx-md"></i>
        </a>
      </div>
    </div>
  );
};

export default MyPage;
