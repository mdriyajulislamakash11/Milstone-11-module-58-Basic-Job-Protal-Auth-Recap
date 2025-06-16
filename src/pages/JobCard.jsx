import React from 'react';
import { FaDollarSign, FaMapMarkerAlt, FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job || {};

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      
      {/* Header Section */}
      <div className="flex items-center gap-4 p-4 border-b">
        <img
          src={company_logo}
          alt={company}
          className="w-14 h-14 object-contain rounded-md"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{company}</h4>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FaMapMarkerAlt className="text-xs" /> {location}
          </p>
        </div>
        <FaFire className="ml-auto text-red-500 animate-pulse" title="Hot Job" />
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-2">
            {title}
            <span className="badge badge-secondary text-xs">NEW</span>
          </h2>
          <p className="text-sm text-gray-600 mb-3 line-clamp-3">{description}</p>

          {/* Requirements */}
          <div className="flex flex-wrap gap-2 mb-4">
            {requirements?.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-indigo-100 hover:text-indigo-600 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t mt-auto">
          <p className="text-sm text-gray-700 flex items-center gap-1">
            <FaDollarSign className="text-blue-600" />
            <span className="font-semibold text-blue-600">
              {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency}
            </span>
          </p>

          <Link to={`/jobs/${_id}`}>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition">
              Apply
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
