import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faFlask, faDna, faCalculator, faLaptopCode, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  'graduation-cap': faGraduationCap,
  'flask': faFlask,
  'dna': faDna,
  'calculator': faCalculator,
  'laptop-code': faLaptopCode,
  'user-graduate': faUserGraduate
};

const EducationCard = ({ id, icon, name, color, onClick }) => {
  return (
    <div 
      className="education-card btn-glow"
      style={{ '--card-color': color }}
      onClick={onClick}
    >
      <div className="card-icon">
        <FontAwesomeIcon icon={iconMap[icon]} size="2x" />
      </div>
      <h3>{name}</h3>
      <div className="hover-effect"></div>
    </div>
  );
};

export default EducationCard;