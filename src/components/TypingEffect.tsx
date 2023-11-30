"use client";
import React, { useState, useEffect, FunctionComponent } from "react";

export const TypingEffect: FunctionComponent<{ text: string }> = ({ text }) => {
  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delay, setdelay] = useState(100);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, currentIndex, delay]);
  useEffect(() => {
    setdelay(
      getRandomNumber(getRandomNumber(90, 100), getRandomNumber(150, 200))
    );
  }, [currentIndex]);
  return displayText;
};

export default TypingEffect;
