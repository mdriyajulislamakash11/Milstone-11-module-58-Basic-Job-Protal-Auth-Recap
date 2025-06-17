import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link } from "react-router-dom";

const MyApplication = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/job_applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setJobs(data);
      });
  }, [user.email]);


  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/job_applications/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
        }

        const filter = jobs.filter((item) => item._id !== _id);
        setJobs(filter)
      });
  };

  return (
    <div>
      <h2 className="text-3xl">My Applications: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <Link to={`/updateApplicant/${job._id}`}>
                    <button className="btn btn-ghost">X</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-ghost"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
