import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
// import './cursor.scss'
const Cursor = () => {

const [position, setPosition] = useState({x:0,y:0})

useEffect(()=>{
    const mouseMove = (e)=>{
        setPosition({x:e.clientX,y:e.clientY})
    }
    window.addEventListener("mousemove",mouseMove)

    return () => {
        window.removeEventListener("mousemove", mouseMove)
    }
}, []);


  return (
    <motion.div className='cursor w-12 h-12 rounded-full border border-white fixed z-[999]'
    animate={{x:position.x, y:position.y}}>
      
    </motion.div>
  )
}

export default Cursor
