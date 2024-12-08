import React from "react";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [inputData, setInputData] = useState({
      name: "",
      email: "",
      Password: ""
  });
  const [ShowText, setShowText] = useState(false);
  const Url = "http://localhost:9000/Contact";

  const handleClick = async () => {
      if (!inputData.name || !inputData.email || !inputData.Password) {
          alert("Please fill all the details");
          
      }

      try {
          const response = await axios.post(Url, inputData);
          const resp = response.data;
          const respstatus = response.status;
console.log(resp)
          if (respstatus === 200) {
              console.log(respstatus);
              setShowText(true);
          }

          setInputData({
              name: "",
              email: "",
              Password: ""
          });
      } catch (error) {
          console.error("Error occurred during form submission:", error);
          alert("There was an issue submitting your form. Please try again later.");
      }
  };

  const handleinputchange = (e) => {
      setInputData((prevData) => {
          return {
              ...prevData,
              [e.target.name]: e.target.value,
          };
      });
      console.log(inputData);
  };

  return (
      <div className="container text-white"style={{height:"100vh",padding: "20px" }}>
        <h1 className="text"style={{fontWeight:"700",fontSize:"32px"}}>Contact Me</h1>
          <div className="row mt-4 justify-content-center align-items-center">
              <div className="mb-3 col-6">
                  <label className="form-label">Enter Your Name</label>
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      onChange={handleinputchange}
                  />
              </div>
              <div className="row justify-content-center align-items-center">
              <div className="mb-3 col-6">
                  <label className="form-label">Email address</label>
                  <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="name@example.com"
                      onChange={handleinputchange}
                  />
              </div>
              </div>

              <div className="mb-3 col-6">
                  <label className="form-label">Password</label>
                  <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Your Password"
                      name="Password"
                      onChange={handleinputchange}
                  />
              </div>

              <div className="d-flex justify-content-center align-items-center">
                  <div className="text-center">
                      <button className="btn btn-primary btn-sm" onClick={handleClick}>
                          Let’s Collaborate
                      </button>
                  </div>
              </div>

              {ShowText && (
                  <ul className="mt-5 ms-5" style={{ fontSize: "25px" }}>
                      <li><h4>Email: harikrishnannivetha@gmail.com</h4></li>
                      <li><h4>Phone: 9080901104</h4></li>
                      <li>
                          <h4>
                              Linkedin:{" "}
                              <a href="https://www.linkedin.com/in/nivetha-harikrishnan-587651297/" target="_blank" rel="noopener noreferrer">
                                  https://www.linkedin.com/in/nivetha-harikrishnan-587651297/
                              </a>
                          </h4>
                          </li>
                          <li>
                          <h4>
                             GitHub:{" "}
                              <a href="https://github.com/Nivethahari30" target="_blank" rel="noopener noreferrer">
                              https://github.com/Nivethahari30
                              </a>
                          </h4>
                          
                      </li>
                      <li><h4>Address: Vellore, Tamil Nadu, 6320601.</h4></li>
                  </ul>
              )}
          </div>
      </div>
  );
};

export default Contact;
