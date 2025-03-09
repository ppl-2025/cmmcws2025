import React from "react";
import "./Events.css";
import person3 from "../assets/person3.png"
import eve from "../assets/evebg.jpg"
import logo from "../assets/L1.png"

const eventData = [
  {
    date: "Friday, 18 April",
    time: "8:00 AM - 8:30 AM",
    title: "Breakfast",
  },
  {
    date: "Friday, 18 April",
    time: "8:30 AM - 9:05 AM",
    title: "Session 1",
    speakers: [{ name: "Speaker-1", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote",
    image: person3,
  },
  {
    date: "Friday, 18 April",
    time: "9:10 AM - 9:45 AM",
    title: "Session 2",
    speakers: [{ name: "Speaker-2", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote",
    image: person3,
  },
  {
    date: "Friday, 18 April",
    time: "9:50 AM - 10:25 AM",
    title: "Session 3",
    speakers: [{ name: "Speaker-2", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote",
    image: person3,
  },
  {
    date: "Friday, 18 April",
    time: "10:30 AM - 11:05 AM",
    title: "Session 4",
    speakers: [{ name: "Speaker-3", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote",
    image: person3,
  },
  {
    date: "Friday, 18 April",
    time: "11:10 AM - 11:45 AM",
    title: "Session 5",
    speakers: [{ name: "Speaker-4", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote",
    image: person3,
  },
  {
    date: "Friday, 18 April",
    time: "11:50 AM - 12:25 PM",
    title: "Session 6",
    speakers: [{ name: "Speaker-5", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote",
    image: person3,
  },
  {
    date: "Friday, 18 April",
    time: "12:30 PM - 1:30 PM",
    title: "Lunch Break",
  },
  {
    date: "Friday, 18 April",
    time: "1:30 PM - 2:05 PM",
    title: "Session 7",
    speakers: [{ name: "Speaker-6", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote",
    image: person3,
  },
  {
    date: "Friday, 18 April",
    time: "2:10 PM - 2:45 PM",
    title: "Session 8",
    speakers: [{ name: "Speaker-7", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote",
    image: person3,
  },
  {
    date: "Friday, 18 April",
    time: "2:50 PM - 3:25 PM",
    title: "Session 9",
    speakers: [{ name: "Speaker-8", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "35 Minutes",
    track: "Keynote",
    image: person3,
  },
  {
    date: "Friday, 18 April",
    time: "3:30 PM - 4:00 PM",
    title: "Session 10",
    speakers: [{ name: "Speaker-9", role: "Position at ABC" }],
    sessionType: "Main Stage Session",
    duration: "30 Minutes",
    track: "Keynote",
    image: person3,
  },
  {
    date: "Friday, 18 April",
    time: "4:00 PM - 4:30 PM",
    title: "Closing Remarks",
    image: "/images/closing.jpg"
  }
];

function Events() {
  return (
    <div className="eve">
      <div className="eve-con">
        <img  className="eveimg" src={eve} alt="Event Background" />
        <div className="eve-content">
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="events-wrapper">
        <h3 className="events-title">Events Schedule</h3>
        <p className="events-description">
        Experience a day filled with engaging sessions, discussions, and networking opportunities. Discover trends, gain insights, and connect with professionals to drive innovation and growth.
        </p>
      </div>

      <div className="events-container">
        {eventData.map((event, index) => (
          <div 
            key={index} 
            className={`event-card ${event.speakers ? "session" : "break center-text"}`}
          >
            {event.speakers && event.image && (
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
            )}

            <div className={`event-content ${!event.speakers ? "center-content" : ""}`}>
              <div className="event-time">
                <p>{event.date}</p>
                <h4>{event.time}</h4>
              </div>
              <h3>{event.title}</h3>
              {event.speakers && (
                <div className="speakers">
                  {event.speakers.map((speaker, speakerIndex) => (
                    <div key={speakerIndex} className="speaker">
                      <p>{speaker.name} - {speaker.role}</p>
                    </div>
                  ))}
                </div>
              )}
              {event.speakers && <button className="save-seat-btn" onClick={() => window.open("https://sessionize.com/CWS2025/", "_blank")}>Save a Seat</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
