import React from "react";
import { motion } from "framer-motion";
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Image Section */}
        <div className="flex-1">
          <motion.img
            src={team1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="max-w-64 rounded-t-[40px] border-l-4 border-b-4 border-blue-500 rounded-br-[40px] shadow-2xl"
          />
          <motion.img
            src={team2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="max-w-64 rounded-t-[40px] border-l-4 border-b-4 border-blue-500 rounded-br-[40px] shadow-2xl"
          />
         
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <motion.h1
            animate={{
              x: [0, 50, 0],
              color: ["#ff0000", "#00ff00", "#0000ff"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="text-5xl font-bold"
          >
            Box Office{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#f9b705", "#05aff9", "#ff5733"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              Jobs
            </motion.span>{" "}
            News!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
