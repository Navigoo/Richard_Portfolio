import { motion, useViewportScroll } from "framer-motion";
import React from 'react';



 const CircleIndicator = () => {
    const { scrollYProgress } = useViewportScroll()
  
    return (
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
    )
  }
  
export default CircleIndicator