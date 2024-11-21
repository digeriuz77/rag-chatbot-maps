import React from "react";

const DotsLoader = () => {
  return (
    <div className="flex items-center justify-start space-x-2 h-6">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`size-3 rounded-full animate-bounce ${
            index === 0 ? "bg-black dark:bg-white" : "bg-gray-300 dark:bg-gray-600"
          }`}
          style={{
            animationDelay: `${index * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default DotsLoader;
