import React, { useState } from 'react';
import EducationCard from './components/EducationCard';
import QuizFrame from './components/QuizFrame';
import GlitterCursor from './components/GlitterCursor';
import './App.css';

const educationLevels = [
  { id: '10th', icon: 'graduation-cap', name: '10th Grade', color: '#FF9E7D' },
  { id: 'inter-mbipc', icon: 'flask', name: 'Inter - MBiPC', color: '#7DDFFF' },
  { id: 'inter-bipc', icon: 'dna', name: 'Inter - BiPC', color: '#A0FF7D' },
  { id: 'inter-mpc', icon: 'calculator', name: 'Inter - MPC', color: '#FF7DE8' },
  { id: 'bachelors', icon: 'laptop-code', name: 'Bachelors', color: '#FFD47D' },
  { id: 'masters', icon: 'user-graduate', name: 'Masters', color: '#7D8CFF' }
];

function App() {
  const [activeQuiz, setActiveQuiz] = useState(null);

  return (
    <div className="app">
      <GlitterCursor />
      
      {!activeQuiz ? (
        <div className="container glass-card">
          <h1 className="gradient-text">FUTURE COMPASS</h1>
          
          <img 
            src="/career.jpg" 
            alt="Career Path" 
            className="banner-image floating-animation"
          />

          <p className="subtitle">Discover your ideal career path. Select your current education level to begin.</p>

          <div className="education-grid">
            {educationLevels.map(level => (
              <EducationCard 
                key={level.id}
                {...level}
                onClick={() => setActiveQuiz(level.id)}
              />
            ))}
          </div>
        </div>
      ) : (
        <QuizFrame 
          quizId={activeQuiz} 
          onClose={() => setActiveQuiz(null)}
        />
      )}
    </div>
  );
}

export default App;
