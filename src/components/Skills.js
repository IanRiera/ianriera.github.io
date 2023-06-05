import React from "react";

const ColorBar = ({ title, width, color, className = "" }) => {
    return (
        <div>
            <div className={`mb-1 text-base font-medium text-${color}-700 dark:text-${color}-500`}>{title}</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div
                    className={`bg-${color}-600 h-2.5 rounded-full ${className}`}
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <ColorBar title="dark" width={45} color="gray" />
            <ColorBar title="blue" width={45} color="blue" />
            <ColorBar title="red" width={45} color="red" />
            <ColorBar title="green" width={45} color="green" />
            <ColorBar title="yellow" width={45} color="yellow" className="!bg-yellow-400" />
            <ColorBar title="indigo" width={45} color="indigo" />
            <ColorBar title="purple" width={45} color="purple" />
        </div>
    );
}

export default Skills;