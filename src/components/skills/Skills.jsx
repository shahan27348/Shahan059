import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="">
      <motion.div className="listContainer  flex-2 flex max-w-[1266px] mx-auto ml-72">
      <motion.div
          className="box  flex flex-col justify-between p-12 h-[300px] border border-gray-400 mt-16"
          whileHover={{ background: "lightgray", color: "black", scale:1.1 }}
        >
          <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" className=" w-[70px] h-[70px]" />
          <h1 className="mb-8 text-2xl">HTML5</h1>
        </motion.div>
        <motion.div
          className="box  flex flex-col justify-between p-12 h-[300px] border border-gray-400 mt-16"
          whileHover={{ background: "lightgray", color: "black" , scale:1.1}}
        >
          <img src="https://img.icons8.com/color/48/000000/css3.png" className=" w-[70px] h-[70px]" />
          <h1 className="mb-8 text-2xl">CSS3</h1>
        </motion.div>
        <motion.div
          className="box  flex flex-col justify-between p-12 h-[300px] border border-gray-400 mt-16"
          whileHover={{ background: "lightgray", color: "black", scale:1.1 }}
        >
          <img src="https://img.icons8.com/color/48/000000/bootstrap.png" className=" w-[70px] h-[70px]" />
          <h1 className="mb-8 text-2xl">Bootstrap</h1>
        </motion.div>
        <motion.div
          className="box  flex flex-col justify-between p-12 h-[300px] border border-gray-400 mt-16"
          whileHover={{ background: "lightgray", color: "black", scale:1.1 }}
        >
          <img src="https://img.icons8.com/color/48/000000/sass.png" className=" w-[70px] h-[70px]" />
          <h1 className="mb-8 text-2xl">Sass</h1>
        </motion.div>
        <motion.div
          className="box  flex flex-col justify-between p-12 h-[300px] border border-gray-400 mt-16"
          whileHover={{ background: "lightgray", color: "black", scale:1.1 }}
        >
          <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" className=" w-[70px] h-[70px]" />
          <h1 className="mb-8 text-2xl">javaScript</h1>
        </motion.div>
        
        
        
        
        
      </motion.div>
      <motion.div className="listContainer  flex-2 flex max-w-[1266px] mx-auto ml-72">
        
        <motion.div
          className="box  flex flex-col justify-between p-12 h-[300px] border border-gray-400 "
          whileHover={{ background: "lightgray", color: "black", scale:1.1 }}
        >
          <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png" className=" w-[70px] h-[70px]" />
          <h1 className="mb-8 text-2xl">Netlify</h1>
        </motion.div>
        <motion.div
          className="box  flex flex-col justify-between p-12 h-[300px] border border-gray-400 "
          whileHover={{ background: "lightgray", color: "black", scale:1.1 }}
        >
          <img src="https://img.icons8.com/glyph-neue/48/ffffff/github.png" className=" w-[70px] h-[70px]" />
          <h1 className="mb-8 text-2xl">GitHub</h1>
        </motion.div>
        <motion.div
          className="box  flex flex-col justify-between p-12 h-[300px] border border-gray-400 "
          whileHover={{ background: "lightgray", color: "black", scale:1.1 }}
        >
          <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" className=" w-[70px] h-[70px]" />
          <h1 className="mb-8 text-2xl">React Js</h1>
        </motion.div>
        <motion.div
          className="box  flex flex-col justify-between p-12 h-[300px] border border-gray-400 "
          whileHover={{ background: "lightgray", color: "black", scale:1.1 }}
        >
          <img src="https://img.icons8.com/color/48/000000/material-ui.png" className=" w-[70px] h-[70px]" />
          <motion.h1 className="mb-8 text-2xl">Material Ui</motion.h1>
        </motion.div>
        <motion.div
          className="box  flex flex-col justify-between p-12 h-[300px] border border-gray-400 "
          whileHover={{ background: "lightgray", color: "black", scale:1.1 }}
        >
          <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" className=" w-[76px] h-[76px]" />
          <motion.h1 className="mb-8 text-2xl " >C++</motion.h1>
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default Skills;
