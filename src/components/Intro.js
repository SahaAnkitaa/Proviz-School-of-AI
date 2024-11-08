import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';
const Intro = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/apply');
  };
  return (
    <div>
      {/* Welcome Section */}
      <div className="intro-section">
        <h1>Welcome to Proviz School of AI</h1>
        <p>Your journey to mastering AI starts here!</p>
        <button
          type="button"
          onClick={handleApplyClick}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
        >
          Apply Now
        </button>
      

      {/* Gap between sections */}
      <div className="gap-section"></div>

      <div className="divider-line"></div>
      {/* Introduction Section */}
      <div className="text-section">
        <h2>Introduction to Proviz School of AI</h2>
        <p>
          Proviz School of AI is a premier educational institution that is dedicated to empowering individuals with the knowledge and skills needed to thrive in the rapidly evolving field of Artificial Intelligence. Our mission is to provide cutting-edge, practical, and hands-on learning experiences that bridge the gap between theoretical concepts and real-world applications in AI.
        </p>
      </div>

      <div className="divider-line"></div>

      {/* Mission Section */}
      <div className="text-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to develop the next generation of AI experts, equipped with a deep understanding of AI technologies, machine learning, data science, and computational thinking. We strive to foster creativity, critical thinking, and problem-solving skills in every student to help them become leaders in AI innovation.
        </p>
      </div>

      <div className="divider-line"></div>

      {/* Vision Section */}
      <div className="text-section left-to-right">
        <h2>Our Vision</h2>
        <p>
          To be a global leader in AI education by offering world-class training, research opportunities, and a collaborative environment where learners and professionals alike can contribute to the advancement of AI technologies. We aim to create an ecosystem where students can gain the necessary expertise to apply AI to solve complex global challenges.
        </p>
      </div>

      <div className="divider-line"></div>
      
      </div>
    </div>
  );
};

export default Intro;


