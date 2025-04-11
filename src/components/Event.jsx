import React from 'react';
// Import images
import subtitleImgGreen from '../assets/images/subtitle-img-green.png';

const events = [
    { id: 1, date: "01-05", month: "Jan", day: "05", subtitle: "Ocean Water", title: "Far from the countries Vokalia and Consonantia 2022", text: "Sit amet consectetur adipiscing elit sed do eiusmod tempor" },
    { id: 2, date: "02-23", month: "Feb", day: "23", subtitle: "Forest Conservation", title: "Amazon Rainforest Protection Initiative", text: "Join us in preserving vital ecosystems." },
    { id: 3, date: "03-27", month: "Mar", day: "27", subtitle: "Wildlife Rescue", title: "Annual Gala for Animal Sanctuary", text: "Support our efforts to provide safe homes." },
];

function EventCard({ event }) {
    return (
        <li>
            <div className="event-card">
                <time className="card-time" dateTime={event.date}>
                    <span className="month">{event.month}</span>
                    <span className="date">{event.day}</span>
                </time>
                <div className="wrapper">
                    <div className="card-content">
                        <p className="card-subtitle">{event.subtitle}</p>
                        <h3 className="card-title">{event.title}</h3>
                        <p className="card-text">{event.text}</p>
                    </div>
                    {/* Button could link to event details page */}
                    <button className="btn btn-white">
                        <span>View Event</span>
                        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </button>
                </div>
            </div>
        </li>
    );
}

function Event() {
  return (
    <section className="section event" id="event">
      <div className="container">
        <p className="section-subtitle">
          <img src={subtitleImgGreen} width="32" height="7" alt="Wavy line" />
          <span>Event & Program</span>
          <img src={subtitleImgGreen} width="32" height="7" alt="Wavy line" />
        </p>
        <h2 className="h2 section-title">
          Our Most Popular Causes For <strong>Building Fund</strong>
        </h2>
        <ul className="event-list">
            {events.map(event => <EventCard key={event.id} event={event} />)}
        </ul>
         {/* Button could link to a full events calendar */}
        <button className="btn btn-secondary">
          <span>See All Events</span>
          <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
    </section>
  );
}

export default Event;