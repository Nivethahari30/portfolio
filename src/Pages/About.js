import React, { useState } from "react";
import "../App.css";

const About = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  return (
    <div className="about-page ms-5 mt-3" style={{ color: "#ededed" }}>
      <h1 style={{ fontWeight: "700", fontSize: "32px" }}>About Me</h1>
      
      <p className=" container justify-content-center align-items-center ms-3 mt-3">
        Hi, I’m{" "}
        <strong style={{ color: "yellowgreen", fontSize: "32px" }}>
          Nivetha H
        </strong>
        , a <strong>MERN Stack</strong> Developer from Vellore, India. I specialize in building dynamic, responsive web applications and have a strong foundation in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. I completed my BCA with 80% at Thiruvalluvar University and have interned at **Simplar Academy** and **Codesoft Technology**, enhancing my skills in web development. My strengths include being hardworking and dedicated, with a keen interest in solving real-world problems through code. I aspire to grow as a developer and contribute to impactful projects in the tech industry.
      </p>

      {/* Certifications Section */}
      <div className="section-row">
        <h2
          className="section-header"
          onClick={() => setShowCertifications(!showCertifications)}
        >
          Certifications
        </h2>
        {showCertifications && (
          <p className="section-content">
            <strong>MERN Stack Development</strong> – Simplar Academy
            <span> (Completed in November 2024)</span>
          </p>
        )}
      </div>

      {/* Education Section */}
      <div className="section-row">
        <h2
          className="section-header"
          onClick={() => setShowEducation(!showEducation)}
        >
          Education
        </h2>
        {showEducation && (
          <div className="section-content row">
            <div className="card col-3">
              <strong>BCA:</strong>
              <h4>Computer Applications</h4> Thiruvalluvar University, 80%
              (2024)
            </div>
            <div className="card col-3">
              <strong>Schooling:</strong> National Higher Secondary School,
              Gudiyattam
            </div>
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div className="section-row">
        <h2
          className="section-header"
          onClick={() => setShowSkills(!showSkills)}
        >
          Skills
        </h2>
        {showSkills && (
          <ul className="section-content">
            <li>HTML, CSS, Bootstrap</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
        )}
      </div>

      {/* Experience Section */}
      <div className="section-row">
        <h2
          className="section-header"
          onClick={() => setShowExperience(!showExperience)}
        >
          Experience
        </h2>
        {showExperience && (
          <ul className="section-content">
            <li>
              Currently interning to enhance my skills in React.js and building
              robust web applications at Simplar Academy.
            </li>
            <li>
              Currently interning at Codesoft Technology, enhancing my skills
              in MERN stack development and building innovative web
              applications.
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default About;
