import React, { useEffect } from 'react';

const quizUrls = {
  "10th": "/10th.html",
  "inter-mbipc": "/inter-mbipc.html",
  "inter-bipc": "/inter-bipc.html",
  "inter-mpc": "/inter-mpc.html",
  "btech": "/btech.html",
  "masters": "/masters.html"
};

const QuizFrame = ({ quizId, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="quiz-container">
      <div className="quiz-overlay"></div>
      <button className="back-btn" onClick={onClose}>
        <i className="fas fa-arrow-left"></i> Back to Dashboard
      </button>
      <iframe 
        src={quizUrls[quizId]} 
        title={`${quizId} Quiz`}
        className="quiz-iframe"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </div>
  );
};

export default QuizFrame;