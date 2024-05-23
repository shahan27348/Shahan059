import Sidebar from "../sidebar/sidebar";
// import "./navbar.scss";
import { motion } from "framer-motion";

const navbar = () => {
  return (
    <div className="navbar h-[100px]">
      <Sidebar />
      {/* sidebar */}

      <div className="wrapper   max-w-[1366px] mx-auto flex justify-between items-center h-full">
        <motion.span  className="font-bold text-3xl pl-24"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          >
        <motion.a href="#" whileHover={{scale:0.5}}>Shahan </motion.a>
        </motion.span>
        <div className="social  pr-24   flex gap-10">
          <a href="https://www.facebook.com/shahanimran2/">
            <motion.img whileHover={{scale:1.5}} className="w-5 h-5" src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/shahanimran2/">
            <motion.img whileHover={{scale:1.5}} className="w-5 h-5" src="/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCgJTpxRTNcuSWBmufNfO0zQ">
            <motion.img whileHover={{scale:1.5}} className="w-5 h-5" src="/youtube.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-shahan-489286294/">
            <motion.img whileHover={{scale:1.5}} className="w-5 h-5" src="/linkedin.png" alt=""  />
          </a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
