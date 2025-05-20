import React from "react";
import "./Events.css";

function Events() {
  return (
    <section className="events-section">
      <div className="container">
        <h2>Upcoming Events</h2>
        <div className="events-list">
          <div className="event-item">
            <div className="event-date">
              <span className="event-day">12</span>
              <span className="event-month">Aug</span>
            </div>
            <div className="event-details">
              <h3>Summer Music Festival</h3>
              <p>Join us for an unforgettable experience with top artists.</p>
              <button className="btn primary-btn">Buy Tickets</button>
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">
              <span className="event-day">25</span>
              <span className="event-month">Sep</span>
            </div>
            <div className="event-details">
              <h3>Rock Night Live</h3>
              <p>Experience the best rock bands live in concert.</p>
              <button className="btn primary-btn">Buy Tickets</button>
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">
              <span className="event-day">10</span>
              <span className="event-month">Oct</span>
            </div>
            <div className="event-details">
              <h3>Jazz & Blues Evening</h3>
              <p>Relax with smooth jazz and blues performances.</p>
              <button className="btn primary-btn">Buy Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
