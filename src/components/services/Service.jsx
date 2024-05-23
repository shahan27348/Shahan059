// import { useRef } from "react";
// import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Service = () => {
  // const ref = useRef()
  // const isInView = isInView(ref{margin:"-100px"})
  return (
    <motion.div
      className="services  bg-gradient-to-b from-[#0c0c1d] to-[#111132] h-full flex flex-col  "
      variants={variants}
      initial="initial"
      //   animate="animate"
      whileInView="animate"
    >
      <motion.div
        className="textContainer mt-10  self-end flex items-center gap-5 "
        variants={variants}
      >
        <motion.p className="font-light text-base text-gray-500 text-right" whileHover={{scale:1.2, color:"orange"}}>
          I am Muhammad Shahan, a Front End <br /> Developer by passion.
        </motion.p>
        <hr className="w-[350px] border-t border-gray-300" />
      </motion.div>
      <motion.div
        className="titleContainer self-start mt-40 ml-20 "
        variants={variants}
      >
        <div className="title">
          <motion.h1
            className="text-4xl font-thin "
            whileHover={{ scale: 1.1, color: "orange" }}
          >
            I am a Full-Stack developer based in Lahore, Pakistan. I am an
            Information
            <br /> Technology undergraduate from Virtual University. I am
            <br />
            very passionate about improving my coding skills & developing
            <br />
            applications & websites.
          </motion.h1>
        </div>
        <div className="title flex flex-col  gap-2 mt-10 ">
          <motion.h1
            className="text-4xl font-thin"
            whileHover={{ scale: 1.1, color: "orange" }}
          >
            I build WebApps and Websites using REACT JS. Working for myself to{" "}
            <br />
            improve my skills. Love to build Full-Stack clones.
          </motion.h1>
          <div className="flex flex-col justify-center">
            <div>
              <span className="text-amber-500 font-thin text-2xl">Email</span>
              <motion.span
                className="text-2xl font-thin"
                whileHover={{ color: "orange" }}
              >
                {" "}
                : shahanking68@gmail.com
              </motion.span>
            </div>
            <div>
              <span className="text-amber-500 font-thin text-2xl">Place</span>
              <motion.span
                className="text-2xl font-thin"
                whileHover={{ color: "orange" }}
              >
                {" "}
                : Lahore, Pakistan - 592300
              </motion.span>
            </div>
          </div>
          <motion.button className="w-[250px] h-[90px] rounded-full bg-amber-500 border-none text-[25px] cursor-pointer mt-6" whileHover={{scaleX:1.1, backgroundColor:"transparent",border:"3px solid orange"}} whileTap={{scale:0.6}}>
            Resume
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Service;
