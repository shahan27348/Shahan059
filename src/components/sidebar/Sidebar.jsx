// import "./sidebar.scss";
import Toggle from "./toggleButton/Toggle";
import { useState } from "react";
import Links from "../sidebar/links/Links";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    Closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar  flex flex-col items-center justify-center bg-white text-black" animate={open ? "open" : "closed"}>
      <motion.div className="bg   fixed top-0 left-0 bottom-0 w-[400px] bg-white z-50" variants={variants}>
        <Links />
      </motion.div>
      <Toggle setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
