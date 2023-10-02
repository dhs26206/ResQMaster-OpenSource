import React from "react";
import './danger.css'
const Danger=()=>{
    return(
        <div className="md:w-[66%] w-full">
            <div className="flex flex-col flex-nowrap justify-center items-center element   border-gray-500 border-2   rounded-xl">
                <img src="./exclamation.png" alt="exclamation" className="mb-5" style={{height:'80px', width:'80px'}}/>
                <h1 className="mb-5 font-extrabold  text-2xl">Are You In Danger ?</h1>
                {/* onClick() */}
                <button type="button" className="w-64 h-10 bg-blue-700 text-white rounded-lg hover:bg-blue-500"> Yes </button>
            </div>

        </div>
    )
}
const Map=()=>{
    return(
        <div>

        </div>
    )
}
export default Danger;