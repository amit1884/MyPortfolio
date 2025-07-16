import React, { useEffect, useState } from 'react';
import './TypingEffect.scss'; // Import CSS for typing effect

const roles = ["Software Engineer", "Frontend Developer"];

const TypingText = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    let typingSpeed = 100;

    if (isDeleting) {
      typingSpeed = 50;
    }

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length); // Next role
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index]);

  return (
    <h1 className="typing-container">
      I am <span className="typing">{displayedText}</span><span className="cursor">|</span>
    </h1>
  );
};

export default TypingText;
