import React, { useEffect, useRef, useState } from 'react';
import './Startup.css';

const Startup = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef(null);

  const handleFinish = () => {
    setIsFadingOut(true);
    // Allow fade out animation to complete before unmounting
    setTimeout(() => {
      onComplete();
    }, 1000); // matches the CSS fade-out transition duration
  };

  useEffect(() => {
    // Attempt to auto-play (some browsers require user interaction or muted attr)
    const playPromise = videoRef.current?.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn("Auto-play was prevented:", error);
      });
    }
  }, []);

  return (
    <div className={`startup-container ${isFadingOut ? 'fade-out' : ''}`}>
      <video
        ref={videoRef}
        className="startup-video"
        src="/startup.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleFinish}
      />
      <button className="startup-skip-btn" onClick={handleFinish}>
        Skip
      </button>
    </div>
  );
};

export default Startup;
