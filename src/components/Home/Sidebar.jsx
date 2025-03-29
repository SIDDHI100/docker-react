import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";
const Sidebar=()=>{
    
 const data = [
     {
         title: "All tasks",
         icon: <CgNotes />,
         Link: "/",
     },
     {
         title: "Important Tasks",
         icon: <MdLabelImportant/>,
         Link: "/Important_Tasks",
     },
     {
         title: "Completed Tasks",
         icon: <FaCheckDouble />,
         Link: "/Completed_Tasks",
     },
     {
         title: "Incomplete Tasks",
         icon: <TbNotebookOff />,
         Link: "/Incomplete_Tasks",

     },

 ];
 return ( 
 <>
        <div>
            <h2 className="text-xl font-semibold">The code Master</h2>
            <h4 className="my-1 text-gray-400 ">siddhi@gmail.com</h4>
            <hr/>
        </div>
        <div>{data.map((items,i)=>(<Link to={items.Link} key={i} className="my-2 flex items-center hover:bg-black transition:ease 03s">{items.icon} {items.title} </Link>)) }
        </div>
        <div>
            <button className="bg-gray-600 w-full p-2 rounded">
                Log Out
            </button>
        </div>
    </>
 );
};
export default Sidebar;