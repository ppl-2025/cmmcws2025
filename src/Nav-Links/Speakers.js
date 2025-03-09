import React from "react";
// import { Link } from "react-router-dom";
// import person from "../assets/person3.png";
import "./Speakers.css";
import logo from "../assets/L1.png";
import eve from "../assets/evebg.jpg";
import prabhat from "../assets/prabhat.jpg"
import inder from "../assets/inder.JPG"
import ajit from "../assets/ajit.jpg"


function Speakers() {
  const speakers = [
    { id: 1, name: "Prabhat Nigam", position: "CTO at GoldenFive", img: prabhat},
    { id: 2, name: "Inderjeet Singh Jaggi", position: "SharePoint Architect at GoldenFive", img: inder },
    { id: 3, name: "Ajit Upadhyaya", position: "Azure & Data Architect at GoldenFive", img: ajit },]

  return (
    <div className="big-container">
      <div className="eve-con">
        <img  className="eveimg" src={eve} alt="Event Background" />
        <div className="eve-content">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <section className="speakers-section">
        <h2>Our Speakers</h2>
        <p>Meet industry leaders and experts sharing insights at our conference. Learn from their experience, network with professionals, and stay ahead in the industry. More speakers coming soon!</p>

        <div className="speaker-grid">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <img src={speaker.img} alt={speaker.name} />
              <h3>{speaker.name}</h3>
              <span>{speaker.position}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Speakers;
