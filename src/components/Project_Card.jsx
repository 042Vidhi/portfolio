import React from 'react';

const Card = ({ title, description, image, Button1, Link1, Button2, Link2 }) => {
  return (
    <div className="font-grotesk max-w-sm p-4 rounded-2xl bg-black text-white shadow-lg mx-4 transition-all duration-300 border-2 border-gray-700 hover:bg-radial-card">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm mb-4">{description}</p>
        </div>

        <div className="overflow-hidden mt-4 flex justify-center items-start">
          <img src={image} alt="pic" className="rounded-sm" />
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          {Button1 && (
            <a
              href={Link1}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-blue-900 text-white py-1 px-4 rounded-lg transition-colors duration-300"
            >
              {Button1}
            </a>
          )}
          {Button2 && (
            <a
              href={Link2}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-blue-900 text-white py-1 px-4 rounded-lg transition-colors duration-300"
            >
              {Button2}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
