import React from "react";
import "../App.css";
// import About from "./About";
// import Project from "./Project";
// import Contact from "./Contact";

const Footer=()=>{
    return(
<footer>
    <div class="footer-container">
        {/* <!-- About Section --> */}
        <div class="footer-about">
            <h4>About Me</h4>
            <p>I'm Nivetha H, a MERN Stack Developer passionate about building user-friendly web applications.</p>
        </div>

        {/* <!-- Quick Links Section --> */}
        <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="/About">About Me</a></li>
                <li><a href="/Project">Projects</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>

        {/* <!-- Social Media Section --> */}
        <div class="footer-social">
            <h4>Follow Me</h4>
            
            <a href="https://github.com/Nivethahari30" target="_blank" >
                <box-icon type="logo" name="github">GitHub</box-icon>
            </a>
            <h2></h2>
            <a href="https://www.linkedin.com/in/nivetha-harikrishnan-587651297/" target="_blank">
                <box-icon type="logo" name="linkedin">Linkedin</box-icon>
            </a>
        </div>
    </div>

    {/* <!-- Copyright Section --> */}
    <div class="footer-bottom">
        <p>© 2024 Nivetha H. All Rights Reserved.</p>
    </div>
</footer>

    )
}
export default Footer;