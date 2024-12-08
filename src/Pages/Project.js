import React from "react";
import "../App.css";
// import { Link } from "react-router-dom";


const Project = () => {
  

  return (
    <div className="ms-5 text-white"style={{height:"100vh",padding: "20px" }}>
      <h1 className="text"style={{fontWeight:"700",fontSize:"32px"}}>My Projects</h1>
      <div className="row mt-5 ms-3 "style={{marginTop:"200px"}}>
      <div class="card col-4 ms-5"style={{width:"500px"}}>
  
  <a href="https://nivicalc.netlify.app/" target="_blank" rel="noopener noreferrer">
  <h3>Calculator</h3>
</a>
    <div className="card-body">
      
      <p>A responsive web-based calculator for performing basic arithmetic operations, built with React.js and styled using CSS. Features include an intuitive UI, real-time results, and error handling. Demonstrates skills in React, state management, and responsive design.</p>
</div>
  </div>
      <div class="card col-4">
      <a href="https://niviweather.netlify.app/" target="_blank" rel="noopener noreferrer">
  <h3>Weather App:</h3>
</a>
        <div className="card-body">
        <p>
   WeatherApp is a dynamic weather forecasting application built using React.js, featuring real-time data integration through APIs. It provides accurate weather details, including temperature, humidity, and conditions for any location worldwide. The project emphasizes responsive design and seamless user experience.
   </p>
        </div>
  
   
   
  </div>
  <div class="card col-4 ms-5"style={{width:"500px"}}>
  
  <a href="https://freshsqueezen.netlify.app/" target="_blank" rel="noopener noreferrer">
  <h3>Billing App</h3>
</a>
    <div className="card-body">
      
      <p>BillingApp is a user-friendly application developed with React.js, designed to streamline the billing process for businesses. It allows users to generate invoices, track payments, and manage customer details efficiently. The app focuses on simplicity, responsiveness, and ease of use for enhanced functionality.</p>
</div>
  </div>
  
  
      </div>
      
</div>
          
       
     
   
  );
};

export default Project;
