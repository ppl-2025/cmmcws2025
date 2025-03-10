import React from 'react';
import './ContactUs.css'; 
function ContactUs() {
  return (
<div className="about-container">
      <header className="hero-section">
        <h1>About CMMC West Summit</h1>
        <p>Organized by the LA Enterprise User Group Foundation</p>
      </header>
      
      <section className="content-section">
        <div className="text-content">
          <h2>What is CMMC West Summit?</h2>
          <p>
            The <strong>CMMC West Summit</strong> is a premier event focused on the latest developments in Cybersecurity Maturity Model Certification (CMMC), compliance strategies, and best practices for securing sensitive federal data. 
            The summit brings together government officials, industry leaders, and cybersecurity professionals to discuss key insights, policy updates, and practical steps for achieving compliance.
          </p>
        </div>
        <div className="image-content">
          <img src="/images/cmmc-west-summit.jpg" alt="CMMC West Summit" />
        </div>
      </section>
      
      <section className="content-section reverse">
        <div className="image-content">
          <img src="/images/la-foundation.jpg" alt="LA Enterprise User Group Foundation" />
        </div>
        <div className="text-content">
          <h2>About the Organizers</h2>
          <p>
            The <strong>Los Angeles Enterprise User Group Foundation</strong> is dedicated to advancing knowledge and expertise in enterprise security and compliance. Through events like the CMMC West Summit, the foundation provides a platform for organizations to learn from experts, network with peers, and stay ahead in the evolving cybersecurity landscape.
          </p>
        </div>
      </section>
      
      <section className="venue-section">
        <h2>Summit Venue</h2>
        <div className="venue-cards">
          <div className="venue-card">
            <img href="src\assets\L2.png" alt="Summit Venue" />
            <div className="venue-info">
              <h3>About the Venue</h3>
              <p>
                The CMMC West Summit will be hosted at a cutting-edge venue designed to foster collaboration and innovation. 
                Located in the heart of Playa Vista, this space offers modern amenities, high-tech conference facilities, and a comfortable environment for meaningful discussions and networking.
              </p>
            </div>
          </div>
          <div className="venue-card">
            <img src="" alt="Venue Location" />
            <div className="venue-info">
              <h3>Venue Address</h3>
              <p><strong>13031 W. Jefferson Blvd, Suite 200, Playa Vista, CA 90094</strong></p>
              <p>
                Attendees will enjoy easy access to top-tier accommodations, dining, and transportation options, ensuring a seamless and engaging event experience. Join us in this dynamic setting to connect with cybersecurity leaders and industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>For inquiries about the CMMC West Summit, contact us at <a href="mailto:info@cmmcwest.org">info@goldenfive.net</a> or call +1.323.489.8001</p>
      </section>
    </div>
  );
}

export default ContactUs;


