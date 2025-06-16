import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";

const JobDetails = () => {
  const {
    _id,
    title,
    company,
    company_logo,
    description,
    requirements,
    salaryRange,
    applicationDeadline,
    location,
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-lg shadow-md p-8 border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 object-contain rounded-md border"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaBuilding /> {company}
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <FaCalendarAlt /> Deadline: {applicationDeadline}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Job Description:</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {requirements?.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Additional Info */}
      <div className="flex flex-wrap items-center justify-between border-t pt-4 text-gray-700">
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Salary:</strong> {salaryRange?.min} - {salaryRange?.max}{" "}
          {salaryRange?.currency}
        </p>
        <p>
          <strong>Deadline:</strong> {applicationDeadline}
        </p>
      </div>

      {/* Apply Button */}
      <div className="text-right mt-8">
        <Link to={`/jobApply/${_id}`}>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
