import React from "react";
import { BsBank2, BsMegaphoneFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";

const JobOfTheDay = () => {
  return (
    <div className="my-24">
      <h2 className="text-center text-4xl font-bold">Jobs of the day</h2>
      <p className="text-center mt-4 font-bold">
       Search and connect with the right candidates faster.
      </p>
      {/* Categori Card */}

      <div className="my-16">
        <div className="stats shadow gap-6 flex flex-col md:flex-row flex-wrap justify-center">
          {/* Card 0 */}
          <div className="p-5  border flex items-center w-full md:w-auto">
            <div className="m-4 text-2xl">
              <BsMegaphoneFill />
            </div>
            <div>
              <div className="stat-title text-xl font-bold">Management</div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="p-5  border flex items-center w-full md:w-auto">
            <div className="m-4 text-2xl">
              <BsMegaphoneFill />
            </div>
            <div>
              <div className="stat-title text-xl font-bold">
                Marketing & Sale
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5  border flex items-center w-full md:w-auto">
            <div className="m-4 text-2xl">
              <RiCustomerService2Fill />
            </div>
            <div>
              <div className="stat-title text-xl font-bold">Customer Help</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5  border flex items-center w-full md:w-auto">
            <div className="m-4 text-2xl">
              <BsBank2 />
            </div>
            <div>
              <div className="stat-title text-xl font-bold">Finance</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-5  border flex items-center w-full md:w-auto">
            <div className="m-4 text-2xl">
              <FaRegLightbulb />
            </div>
            <div>
              <div className="stat-title text-xl font-bold">Software</div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-5  border flex items-center w-full md:w-auto">
            <div className="m-4 text-2xl">
              <GrUserWorker />
            </div>
            <div>
              <div className="stat-title text-xl font-bold">Human Resource</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOfTheDay;
