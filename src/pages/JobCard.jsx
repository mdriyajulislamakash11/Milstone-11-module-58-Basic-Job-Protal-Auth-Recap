import React from "react";
import { FaBolt, FaMapMarkerAlt, FaLock, FaCalendarAlt } from "react-icons/fa";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    description,
    company,
    company_logo,
    category,
  } = job || {};

  return (
    <div className="max-w-sm w-full rounded-xl bg-white p-6 shadow-md border border-blue-100 relative">
      {/* Flash icon */}
      <div className="absolute top-4 right-4 text-green-400">
        <FaBolt />
      </div>

      {/* Logo + Company Name */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100">
          <img src={company_logo} alt={company} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-md font-semibold text-gray-800">{company}</h3>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <FaMapMarkerAlt className="text-xs" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>

      {/* Job Type & Deadline */}
      <div className="flex items-center text-sm text-gray-500 gap-4 mb-3">
        <div className="flex items-center gap-1">
          <FaLock className="text-xs" />
          <span>{jobType}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaCalendarAlt className="text-xs" />
          <span>Deadline: {applicationDeadline}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

      {/* Category */}
      <div className="text-xs inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full mb-4">
        {category}
      </div>

      {/* Salary + Button */}
      <div className="flex items-center justify-between">
        <p className="text-blue-600 font-bold text-lg">
          {salaryRange?.min} - {salaryRange?.max}{" "}
          <span className="text-sm text-gray-500 font-medium">BDT/Month</span>
        </p>
        <button className="text-sm bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition-all font-semibold">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
