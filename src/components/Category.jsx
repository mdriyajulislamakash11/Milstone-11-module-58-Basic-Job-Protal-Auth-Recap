import React from "react";
import { BsBank2, BsMegaphoneFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import hiring from "../assets/hiring.json";
import hiring2 from "../assets/hiring-2.json";
import Lottie from "lottie-react";

const Category = () => {
  return (
    <div className="my-10 ">
      <h2 className="text-center text-4xl font-bold">Browse by category</h2>
      <p className="text-center mt-4 font-bold">
        Find the job that’s perfect for you. about 800+ new jobs everyday
      </p>

      {/* Categori Card */}

      <div className="my-16">
        <div className="stats shadow gap-6 flex flex-col md:flex-row flex-wrap justify-center">
          {/* Card 1 */}
          <div className="p-5 px-10 border flex items-center w-full md:w-auto">
            <div className="m-4 text-2xl">
              <BsMegaphoneFill />
            </div>
            <div>
              <div className="stat-title text-xl font-bold">
                Marketing & Sale
              </div>
              <div className="stat-desc">1526 Jobs Available</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 px-10 border flex items-center w-full md:w-auto">
            <div className="m-4 text-2xl">
              <RiCustomerService2Fill />
            </div>
            <div>
              <div className="stat-title text-xl font-bold">Customer Help</div>
              <div className="stat-desc">185 Jobs Available</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 px-10 border flex items-center w-full md:w-auto">
            <div className="m-4 text-2xl">
              <BsBank2 />
            </div>
            <div>
              <div className="stat-title text-xl font-bold">Finance</div>
              <div className="stat-desc">168 Jobs Available</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-5 px-10 border flex items-center w-full md:w-auto">
            <div className="m-4 text-2xl">
              <FaRegLightbulb />
            </div>
            <div>
              <div className="stat-title text-xl font-bold">Software</div>
              <div className="stat-desc">1856 Jobs Available</div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-5 px-10 border flex items-center w-full md:w-auto">
            <div className="m-4 text-2xl">
              <GrUserWorker />
            </div>
            <div>
              <div className="stat-title text-xl font-bold">Human Resource</div>
              <div className="stat-desc">1856 Jobs Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* HIRING section */}
      <div className="w-3/4 mx-auto border flex justify-between items-center">
        {/* animation */}
        <div>
          <Lottie className="w-40" animationData={hiring} alt="" />
        </div>

        {/* content */}
        <div className="flex items-center w-full">

          <div className="mx-8">
            <span className="text-xl font-bold">We are</span> <br /> <span className="text-6xl font-bold">HIRING</span>
          </div>

          <p className="mt-8 w-full text-xl"> Let’s Work Together <br /> & Explore Opportunities</p>

          <div className="mt-7 mx-10">
            <button className="btn px-14 border border-1">Apply</button>
          </div>

        </div>

        {/* animation */}
        <div className="">
          <Lottie className="w-56" animationData={hiring2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
