import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Cards from "../components/Home/Cards";
import Input_Data from "../Components/Home/Input_Data";

const All_Tasks = () => {
    const [InputDiv, setInputDiv] = useState("hidden");

    return (
        <>
            <div>
                <div className="w-full flex justify-end px-4 py-2">
                    <button onClick={() => setInputDiv("fixed")}>
                        <IoIosAddCircleOutline className="text-4xl text-gray-50 hover:text-gray-100 transition-all duration-300"/>
                    </button>
                </div>
                <Cards Home={"true"} setInputDiv={setInputDiv} />
            </div>
            <Input_Data InputDiv={InputDiv} setInputDiv={setInputDiv} />
        </>
    );
};

export default All_Tasks;
