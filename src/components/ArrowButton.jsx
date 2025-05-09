import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// ArrowButton component
function ArrowButton({ direction, onClick }) {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 ${
        isLeft ? "left-3 ml-5 md:left-5" : "right-3 mr-5 md:right-5"
      } 
          -translate-y-1/2 bg-white p-1 md:p-2 rounded-full shadow-md hover:bg-gray-200 transition`}
    >
      {isLeft ? (
        <FaArrowLeft className="text-black w-4 h-4 md:w-5 md:h-5" />
      ) : (
        <FaArrowRight className="text-black w-4 h-4 md:w-5 md:h-5" />
      )}
    </button>
  );
}

export default ArrowButton;
