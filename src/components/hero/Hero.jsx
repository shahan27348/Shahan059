// import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132] relative">
      <div className="wrapper  max-w-[1366px] h-full mx-auto">
        <motion.div
          className="textContainer  h-full flex flex-col justify-center gap-5"
          variants={textVariants}
          initial="initial"
          // animate="animate"
          whileInView="animate"
        >
          <motion.h2
            variants={textVariants}
            className="text-[50px] text-amber-500 font-bold tracking-[10px]"
          >
            Muhammad Shahan
          </motion.h2>
          <motion.h1 variants={textVariants} class="text-[130px] font-bold">
            Front End Developer
          </motion.h1>
          <motion.div
            className="buttons  cursor-pointer"
            variants={textVariants}
          >
            <motion.button type="button"
              className="p-5 border border-amber-500 rounded-md bg-transparent text-amber-500 mr-5 font-bold text-lg cursor-pointer"
              variants={textVariants} whileHover={{color:"#fff",border:"1px solid #fff"}}
            >
              See the Latest Work
            </motion.button>
            <motion.button
              className="p-5 border border-white rounded-md bg-transparent text-white mr-5 font-bold text-lg cursor-pointer"
              variants={textVariants} 
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            className="w-9"
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer absolute text-[50vh] bottom-[-110px] whitespace-nowrap text-white opacity-5 w-1/2 font-bold cursor-pointer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Programmer Front End Developer
      </motion.div>
    </div>
  );
};

export default Hero;
