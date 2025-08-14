import React from "react";

const SingleMenu = ({ name, image }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          src={image}
          alt={name}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default SingleMenu;
