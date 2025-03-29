import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdOutlineAutoDelete } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const Cards = ({ Home, setInputDiv }) => {
    const data = [
        {
            title: "The best coding platform.",
            desc: "Exploring all features of best coding platforms.",
            status: "Incomplete",
        },
        {
            title: "Assignments.",
            desc: "Completing all assignments.",
            status: "Incomplete",
        },
        {
            title: "Household work on weekend",
            desc: "Finishing all house hold work.",
            status: "Complete",
        },
        {
            title: "Preparation for next week office work.",
            desc: "To Do action plan for upcoming week.",
            status: "Incomplete",
        },
    ];
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {data && data.map((items, index) => (
                <div key={index} className="bg-gray-400 rounded-sm p-4">
                    <h3 className="text-xl font-semibold">{items.title}</h3>
                    <p className="text-gray-300 my-2">{items.desc}</p>
                    <div className="flex items-center  justify-between">
                        <button className="text-white">{items.status}</button>
                        <div className="flex space-x-2">
                            <button><CiHeart /></button>
                            <button><FaEdit /></button>
                            <button><MdOutlineAutoDelete /></button>
                        </div>
                    </div>
                </div>
            ))}
            {Home === "true" && (
                <button className="bg-gray-400  flex flex-col justyify-center items-center  rounded-sm p-4 text-gray-300 hover:scale-105  hover:cursor-pointer transition-all duration-300" onClick={() => setInputDiv("fixed")}>
                    <IoIosAddCircleOutline className="text-5xl"/>
                    <h3 className="text-2xl mt-4">Add Task</h3>
                </button>
            )}
        </div>
    );
};

export default Cards;