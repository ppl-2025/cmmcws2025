import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import "./Register.css";
import SignupImage from "../assets/form fill.jpg"; 

function Register() {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceID = "service_k3k3dul";
    const templateID = "template_8wdsaij";
    const publicKey = "-MiFi2PanwRczGjpH";

    const formData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      company: formRef.current.company.value,
      topic: formRef.current.topic.value,
      message: formRef.current.message.value
    };

    try {
      const response = await emailjs.send(serviceID, templateID, formData, publicKey);
      alert("Registration successful! Email sent.");
      console.log("SUCCESS!", response.status, response.text);
    } catch (error) {
      alert("Error sending email.");
      console.log("FAILED...", error);
    }

    formRef.current.reset();
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-form">
          <h2>Be A Speaker</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="input-group">
              <span className="icon">👤</span>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <span className="icon">✉️</span>
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <span className="icon">🔒</span>
              <input type="text" name="phone" placeholder="Phone Number" required />
            </div>
            <div className="input-group">
              <span className="icon">🏢</span>
              <input type="text" name="company" placeholder="Company Name" required />
            </div>
            <div className="input-group">
              <span className="icon">📌</span>
              <input type="text" name="topic" placeholder="Topic of Discussion" required />
            </div>
            <textarea name="message" placeholder="Additional Notes"></textarea>
            {/* <div className="checkbox-group">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to all statements in <a href="#">Terms of service</a>
              </label>
            </div> */}
            <button className="signup-btn" type="submit">SIGN UP</button>
          </form>
        </div>
        <div className="signup-image">
          <img src={SignupImage} alt="Signup Illustration" />
        </div>
      </div>
    </div>
  );
  
}

export default Register;
