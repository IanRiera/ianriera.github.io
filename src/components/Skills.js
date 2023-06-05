import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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

    return (
        <div ref={colorBarRef}>
            <div
                className={`mb-1 text-base font-medium text-${color}-700 dark:text-${color}-500`}
            >
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
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <AnimatedColorBar title="Animated" width={90} color="red" />
            <AnimatedColorBar title="dark" width={45} color="gray" />
            <AnimatedColorBar title="blue" width={45} color="blue" />
            <AnimatedColorBar title="red" width={45} color="red" />
            <AnimatedColorBar title="green" width={45} color="green" />
            <AnimatedColorBar title="yellow" width={45} color="yellow" className="!bg-yellow-400" />
            <AnimatedColorBar title="indigo" width={45} color="indigo" />
            <AnimatedColorBar title="purple" width={45} color="purple" />
        </div>
    );
}

export default Skills;