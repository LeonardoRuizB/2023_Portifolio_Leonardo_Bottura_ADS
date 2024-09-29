import React, { useState, useEffect } from 'react';

const Typewriter = () => {
  const phrases = [
    "Graduado em Análise e Desenvolvimento de Sistemas",
    "Desenvolvedor de Software",
    "Desenvolvedor Web",
    "Desenvolvedor Full-Stack",
    "Cursando Ciência da computação"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= phrase.length) {
        setCurrentText(phrase.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(intervalId);
        
        setTimeout(() => {
          setIsTyping(true);
          setCurrentText('');
          setCurrentPhraseIndex((prevIndex) =>
            prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
          );
        }, 1500); // Tempo de pausa após a frase completa
      }
    }, 100); // Velocidade de digitação

    return () => clearInterval(intervalId);
  }, [currentPhraseIndex]);

  return (
    <div>
      <h1>
        {currentText}
        {isTyping && <span className="blinking-cursor">|</span>}
      </h1>
    </div>
  );
};

export default Typewriter;
