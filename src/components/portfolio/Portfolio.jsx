import { useRef } from "react";
// import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const item = [
  {
    id: 1,
    title: "Tidio Clone",
    img: "/Tidio.png",
    Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius fugiat eos eligendi ratione sequi officiis similique, numquam",
  },
  {
    id: 2,
    title: "Ludo Game ",
    img: "/Ludo.png",
    Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius fugiat eos eligendi ratione sequi officiis similique, numquam",
  },
  {
    id: 3,
    title: "Fiverr Clone",
    img: "/Fiverr.png",
    Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius fugiat eos eligendi ratione sequi officiis similique, numquam",
  },
  {
    id: 4,
    title: "Spotify Clone",
    img: "/Spotify.png",
    Desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius fugiat eos eligendi ratione sequi officiis similique, numquam",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300,300]);
  return (
    <section>
      <div className="container  flex justify-center items-center w-full h-full overflow-hidden">
        <div className="wrapper  max-w-[1266px] h-full mx-auto flex items-center justify-center gap-12">
          <div className="imgContainer  flex-1 h-1/2" ref={ref}>
            <img className="w-full h-full object-cover" src={item.img} alt="" />
          </div>
          <motion.div className="textContainer flex-1 flex flex-col gap-8" style={{ y }}>
            <h2 className="text-[68px] font-bold">{item.title}</h2>
            <p className="text-gray-500 text-xl">{item.Desc}</p>
          <button className="bg-amber-500 border-0 rounded-lg p-2 w-[12rem] cursor-pointer text-xl font-medium">See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio  relative" ref={ref}>
      <div className="progress sticky top-0 left-0 pt-12 text-center text-amber-500 font-bold text-2xl">
        <h1 className="text-6xl">My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar  h-[7px] bg-white mt-4"></motion.div>
      </div>
      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
