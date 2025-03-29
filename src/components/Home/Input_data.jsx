import React from "react";
import { ImCross } from "react-icons/im";

const Input_Data = ({ InputDiv, setInputDiv }) => {
    console.log("Rendering Input_Data with InputDiv:", InputDiv);

    return (
        <>
            <div className={`${InputDiv} top-0 left-0 bg-gray-50 opacity-80 h-screen w-full`}></div>
            <div className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
                <div className="w-2/6 bg-gray-900 p-4 rounded">
                    <div className="flex justify-end">
                        <button className="text-2xl" onClick={() => setInputDiv("hidden")}>
                            <ImCross />
                        </button>
                    </div>
                    <input type="text" placeholder="Title" name="Title" className="px-3 py-2 rounded mb-2" />
                    <textarea name="desc" cols="30" rows="10" placeholder="Description....." className="px-3 py-2 rounded mb-2"></textarea>
                    <button className="px-3 py-2 bg-gray-400 text-white rounded">
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default Input_Data;
