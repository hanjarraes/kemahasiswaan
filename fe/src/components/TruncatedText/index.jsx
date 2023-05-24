import React, { useEffect, useRef } from 'react';

const TruncatedText = ({ text, maxLength }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const truncateText = () => {
      if (textRef.current.textContent.length > maxLength) {
        textRef.current.textContent = textRef.current.textContent.slice(0, maxLength) + '...';
      }
    };

    truncateText();
  }, [text, maxLength]);

  return <p ref={textRef}>{text}</p>;
};

export default TruncatedText;