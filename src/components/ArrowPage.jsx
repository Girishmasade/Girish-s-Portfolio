import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

const ArrowPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 left-6">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          <FaArrowAltCircleUp className='text-xl'/>
        </button>
      )}
    </div>
  );
};

export default ArrowPage;
