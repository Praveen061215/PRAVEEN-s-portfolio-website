import React from 'react';
import './SectionDivider.css';

const SectionDivider = ({ variant = 'default', label = '' }) => {
  return (
    <div className={`section-divider-wrapper div-variant-${variant}`} aria-hidden="true">
      <div className="divider-line divider-line-left" />
      {label && (
        <div className="divider-label-pill">
          <span className="divider-label-dot" />
          <span className="divider-label-text">{label}</span>
          <span className="divider-label-dot" />
        </div>
      )}
      {!label && <div className="divider-center-orb" />}
      <div className="divider-line divider-line-right" />
    </div>
  );
};

export default SectionDivider;
