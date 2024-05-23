import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const links = () => {
  const items = ["Home", "About me", "Skills", "Projects", "Contact"];
  return (
    <motion.div className="links  absolute inset-0 flex flex-col items-center justify-center gap-5" variants={variants}>
      {items.map((item) => (
        <motion.a className="text-4xl" href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.3}} whileTap={{scale:0.95}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default links;
