import React, { useState } from 'react';
import '../assets/css/DonationModal.css'; // We'll create this CSS file next

function DonationModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState(50); // Default donation amount
  const [customAmount, setCustomAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) {
    return null; // Don't render the modal if it's not open
  }

  const handleAmountClick = (value) => {
    setAmount(value);
    setCustomAmount(''); // Clear custom amount when preset is clicked
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
        setCustomAmount(value);
        setAmount(Number(value)); // Update the main amount state
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would integrate with a payment processor here
    // using the 'amount', 'name', and 'email' state values.
    console.log(`Donation Submitted: Amount: $${amount}, Name: ${name}, Email: ${email}`);
    alert(`Thank you for your $${amount} donation, ${name}! (Simulation)`);
    onClose(); // Close the modal after submission
    // Reset form fields (optional)
    setAmount(50);
    setCustomAmount('');
    setName('');
    setEmail('');
  };

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Close on overlay click */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside */}
        <button className="modal-close-btn" onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <h2 className="h3 modal-title">Make a Donation</h2>
        <p className="modal-subtitle">Your contribution saves lives!</p>

        <form onSubmit={handleSubmit}>
          <div className="amount-selection">
            <p>Select Amount:</p>
            <div className="amount-buttons">
              {[10, 25, 50, 100].map((value) => (
                <button
                  type="button"
                  key={value}
                  className={`amount-btn ${amount === value && !customAmount ? 'active' : ''}`}
                  onClick={() => handleAmountClick(value)}
                >
                  ${value}
                </button>
              ))}
               <input
                  type="text" // Use text to better control input with regex
                  pattern="\d*" // Hint for numeric input, validation is done in JS
                  inputMode="numeric" // Hint for mobile keyboards
                  placeholder="Custom"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className={`amount-input ${customAmount ? 'active' : ''}`}
               />
            </div>
          </div>

          <div className="donor-info">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="modal-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="modal-input"
            />
          </div>

          <button type="submit" className="btn btn-primary modal-submit-btn">
            <span>Donate ${amount || 0} Now</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonationModal;