import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedColorBar = ({ title, width, color, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const colorBarRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );
  
      if (colorBarRef.current) {
        observer.observe(colorBarRef.current);
      }
  
      return () => {
        if (colorBarRef.current) {
          observer.unobserve(colorBarRef.current);
        }
      };
    }, []);
  
    const barColor = isVisible ? color : "gray";
    const textColor = isVisible ? `${color}-700` : "gray-700";
    const darkTextColor = isVisible ? `${color}-500` : "gray-700";
  
    return (
      <div ref={colorBarRef}>
        <div className={`mb-1 text-base font-medium ${textColor} ${darkTextColor}`}>
          {title}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <motion.div
            className={`bg-${color}-600 h-2.5 rounded-full ${className}`}
            style={{ width: isVisible ? `${width}%` : 0 }}
            initial={{ width: 0 }}
            animate={{ width: isVisible ? `${width}%` : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </div>
    );
  };
  

const Skills = () => {
    return (
        <div>
            <h2 className="font-bold text-8xl mt-64 w-full text-center
            dark:text-light md:text-6xl md:mt-32">Skills</h2>
            <AnimatedColorBar title="dark" width={45} color="gray" className="!bg-gray-500"/>
            <AnimatedColorBar title="blue" width={45} color="blue" className="!bg-blue-600" />
            <AnimatedColorBar title="red" width={45} color="red" className="!bg-red-600"/>
            <AnimatedColorBar title="green" width={45} color="green" className="!bg-green-600"/>
            <AnimatedColorBar title="yellow" width={45} color="yellow" className="!bg-yellow-400" />
            <AnimatedColorBar title="indigo" width={45} color="indigo" className="!bg-indigo-600"/>
            <AnimatedColorBar title="purple" width={45} color="purple" className="!bg-purple-600"/>
        </div>
    );
}

export default Skills;