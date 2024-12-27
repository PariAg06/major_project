import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();



  return (
    <div className='home-container'>
    

      <section className='info-section'>
        <h2>"Predict Today, Prevent Tomorrow"</h2>
        <h5>
        Enter your symptoms, and we’ll help you understand what might be going on with your health.
        </h5>
      </section>

      <section className='action-section'>
        <h2>Get Started</h2>
        <button className='start-button' onClick={() => navigate('/login')}>
          Start Prediction
        </button>
      </section>
    </div>
  );
};

export default Home;
