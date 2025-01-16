'use client';
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

const TypewriterText = ({ 
  words, 
  className = "", 
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayText === currentWord) {
      // Word is complete, wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    } else if (isDeleting && displayText === '') {
      // Word is deleted, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Type or delete next character
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? displayText.slice(0, -1)
          : currentWord.slice(0, displayText.length + 1);
        setDisplayText(nextText);
      }, isDeleting ? deleteSpeed : typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText; 