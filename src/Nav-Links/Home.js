import React, { useState, useEffect } from "react";
import "./Home.css";
// import logo from "../assets/Final.png"
import bgVideo from "../assets/new-video.mp4"
// import homebg from "../assets/bg3.jpg"
import conimg from "../assets/conference.jpg"
import eraimg from "../assets/era.jpg"
// import person from "../assets/person3.png"
import prabhat from "../assets/prabhat.jpg"
import inder from "../assets/inder.JPG"
import ajit from "../assets/ajit.jpg"


const targetDate = new Date("April 18, 2025 00:00:00").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-timer">
      <p>{`${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`}</p>
    </div>
  );
};


const speakers = [
  { id: 1, name: "Prabhat Nigam", position: "CTO at GoldenFive", img: prabhat},
    { id: 2, name: "Inderjeet Singh Jaggi", position: "SharePoint Architect at GoldenFive", img: inder },
    { id: 3, name: "Ajit Upadhyaya", position: "Azure & Data Architect at GoldenFive", img: ajit },
]

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <video autoPlay loop muted className="background-video">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          {/* <div className="logo-con"><img src={logo} alt="Event Logo" className="logo" /></div> */}
          <h2 className="event-subtitle">CMMC Ecosystem Summit + Implementation Conference</h2>
          <p className="event-details">April 18, 2025 | LOS ANGELES, CA</p>

          <a href="https://www.eventbrite.com/e/cmmc-west-summit-2025-tickets-1268110355209?aff=oddtdtcreator"
            target="_blank" rel="noopener noreferrer" className="register-btn-1">
            Register
          </a>
        </div>
      </header>
      <CountdownTimer />
      <div className="full">
        <div className="background-section">
          {/* <img src={homebg} alt="Event Background" className="background-image" /> */}
          <div className="content-box">
            <h2>About the Conference</h2>
            <div className="text-image-container">

              <div className="image-container">
                <img src={conimg} alt="Conference" />
              </div>

              <div className="text-container">
                <p>
                  This conference will provide valuable insights into the latest compliance requirements and strategies for securing contracts. Experts will share practical solutions to streamline certification and address security challenges. Staying informed and prepared is essential for long-term success in the evolving regulatory landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="background-section2">
          <div className="era-box">

            <div className="t-img-container">

              <div className="t-container">
                <h2>New Era of Compliance: Adapting to CMMC Regulations</h2>
                <p>
                  The CMMC Rule, effective since December 16, 2024, requires full certification for contracts involving Controlled Unclassified Information (CUI). Non-compliance risks losing contracts, making it crucial to stay ahead.

                  This conference offers expert insights, hands-on strategies, and tools to help you navigate these changes. Learn how to secure contracts, streamline certification, and close security gaps while managing costs efficiently.

                  With the regulatory landscape shifting, staying informed and prepared is the key to success.
                </p>
                <a href="https://www.eventbrite.com/e/cmmc-west-summit-2025-tickets-1268110355209?aff=oddtdtcreator"
                  target="_blank" rel="noopener noreferrer" className="register-btn-1">
                  Register
                </a>
              </div>

              <div className="img-container">
                <img src={eraimg} alt="Conference" />
              </div>


            </div>
          </div>
        </div>
        <div className="pr-section">
    <div className="pricing-section">
        <h2 className="pricing-title2">PRICING</h2>

        <div className="pricing-table">
            <div className="pricing-column sponsor">
                <div className="pricing-title-box">Platinum Sponsor</div>
                <h4><span>$</span>5,000</h4>
                <div className="bullet-points">
                    <ul>
                        <li>Lunch Sponsor</li>
                        <li>Prime logo placement</li>
                        <li>Verbal recognition at event</li>
                    </ul>
                </div>
                <button 
                    className="blue-btn-2" 
                    onClick={() => window.open("https://sessionize.com/CWS2025/", "_blank")}
                >
                    Be a Sponsor
                </button>
            </div>

            <div className="pricing-column sponsor">
                <div className="pricing-title-box">Gold Sponsor</div>
                <h4><span>$</span>3,500</h4>
                <div className="bullet-points">
                    <ul>
                        <li>Coffee, Tea, Snacks Sponsor</li>
                        <li>Company logo on materials</li>
                        <li>Shoutout during breaks</li>
                    </ul>
                </div>
                <button 
                    className="blue-btn-2" 
                    onClick={() => window.open("https://sessionize.com/CWS2025/", "_blank")}
                >
                    Be a Sponsor
                </button>
            </div>

            <div className="pricing-column sponsor">
                <div className="pricing-title-box">Silver Sponsor</div>
                <h4><span>$</span>1,000</h4>
                <div className="bullet-points">
                    <ul>
                        <li>Booth Sponsor</li>
                        <li>Logo recognition</li>
                        <li>Mentions on stage</li>
                    </ul>
                </div>
                <button 
                    className="blue-btn-2" 
                    onClick={() => window.open("https://sessionize.com/CWS2025/", "_blank")}
                >
                    Be a Sponsor
                </button>
            </div>
        </div>
    </div>
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

export default Home;
