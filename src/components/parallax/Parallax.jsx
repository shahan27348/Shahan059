// import { useRef } from "react";
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";


const Parallax = ({ type }) => {
  // const ref = useRef; 

  // const { scrollyProgress } = useScroll({
  //   target: ref,
  //   offset:["start start","end start"]
  // });


  // const yBg = useTransform(scrollyProgress, [0, 1], ["0%", "500%"]);  



  return (
    <div
      className="parallax w-full h-full relative flex items-center justify-center"  
      // ref={ref} 
      style={{
        background:
          type === "About me"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
    {/* style={{ y: yBg }} */}
      <motion.h1 className="text-9xl font-bold text text-purple-300">
        {type === "About me" ? "About Me :)" : "My Skills"}
      </motion.h1>
      <motion.div className="mountains bg-mountains  bg-cover bg-bottom w-full h-full absolute z-30" ></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
