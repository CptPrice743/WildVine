import React from "react";
// Import images
import donate1 from "../assets/images/donate-1.jpg";
import donate2 from "../assets/images/donate-2.jpg";
import donate3 from "../assets/images/donate-3.jpg";
import donate4 from "../assets/images/donate-4.jpg";

// Example data - in a real app, this might come from an API
const donationCauses = [
  {
    id: 1,
    img: donate1,
    alt: "Elephant",
    raised: 256,
    goal: 34562,
    progress: 83,
    title: "Raise Hand To Save Elephants",
  },
  {
    id: 2,
    img: donate2,
    alt: "Tiger",
    raised: 5000,
    goal: 10000,
    progress: 50,
    title: "Urgent Tiger Habitat Fund",
  },
  {
    id: 3,
    img: donate3,
    alt: "Panda",
    raised: 12000,
    goal: 15000,
    progress: 80,
    title: "Panda Conservation Project",
  },
  {
    id: 4,
    img: donate4,
    alt: "Rhino",
    raised: 800,
    goal: 20000,
    progress: 4,
    title: "Rhino Anti-Poaching Patrols",
  },
];

function DonateCard({ cause, onDonateClick }) {
  // Calculate 'To Go' dynamically
  const toGo = cause.goal - cause.raised > 0 ? cause.goal - cause.raised : 0;
  // Calculate raised percentage dynamically if needed, otherwise use provided progress
  const progressPercent = cause.progress; // Or calculate: (cause.raised / cause.goal) * 100;

  return (
    <li>
      <div className="donate-card">
        <figure className="card-banner">
          <img
            src={cause.img}
            width="520"
            height="325"
            loading="lazy"
            alt={cause.alt}
            className="img-cover"
          />
        </figure>
        <div className="card-content">
          <div className="progress-wrapper">
            <p className="progress-text">
              <span>Raised</span>
              {/* Format currency if needed */}
              <data value={cause.raised}>${cause.raised.toLocaleString()}</data>
            </p>
            <data className="progress-value" value={progressPercent}>
              {progressPercent}%
            </data>
          </div>
          <div className="progress-box">
            {/* Use inline style for dynamic progress width */}
            <div
              className="progress"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <h3 className="h3 card-title">{cause.title}</h3>
          <div className="card-wrapper">
            <p className="card-wrapper-text">
              <span>Goal</span>
              <data className="green" value={cause.goal}>
                ${cause.goal.toLocaleString()}
              </data>
            </p>
            <p className="card-wrapper-text">
              <span>Raised</span>
              <data className="yellow" value={cause.raised}>
                ${cause.raised.toLocaleString()}
              </data>
            </p>
            <p className="card-wrapper-text">
              <span>To Go</span>
              <data className="cyan" value={toGo}>
                ${toGo.toLocaleString()}
              </data>
            </p>
          </div>

          <button className="btn btn-secondary" onClick={onDonateClick}>
            <span>Donation</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </div>
    </li>
  );
}

function Donate({ onDonateClick }) {
    return (
      <section className="section donate" id="donate">
        <div className="container">
          <ul className="donate-list">
              {donationCauses.map(cause => (
                   // Pass onDonateClick to each card
                  <DonateCard key={cause.id} cause={cause} onDonateClick={onDonateClick} />
              ))}
          </ul>
        </div>
      </section>
    );
  }

export default Donate;
