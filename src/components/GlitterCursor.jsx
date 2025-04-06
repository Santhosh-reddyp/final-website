import React, { useEffect, useState } from 'react';

const GlitterCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      setTimeout(() => {
        setTrail({ x: e.clientX, y: e.clientY });
      }, 100);
      
      // Add glitter particles occasionally
      if (Math.random() > 0.7) {
        setParticles(prev => [
          ...prev,
          {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY,
            color: `hsl(${Math.random() * 360}, 100%, 80%)`
          }
        ]);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setParticles(prev => prev.filter(p => Date.now() - p.id < 1000));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div 
        className="cursor" 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className="cursor-trail" 
        style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
      />
      {particles.map(p => (
        <div
          key={p.id}
          className="glitter-particle"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            background: p.color
          }}
        />
      ))}
    </>
  );
};

export default GlitterCursor;