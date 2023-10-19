import React, { useState } from 'react';
import './bottomsection.css'

const BottomSection = () => {
  const [email, setEmail] = useState('');

  const subscribe = () => {
    fetch('http://localhost:5000/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Email: email }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Email sent successfully');
        } else {
          console.error('Email not sent');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Btm_bar abc">
      <p>Sign Up for Daily Insider</p>
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={subscribe}>SUBSCRIBE</button>
    </div>

    
  );
};

export default BottomSection;

