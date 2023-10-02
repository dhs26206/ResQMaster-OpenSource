import React from "react";
import { News } from "./news";
import Danger from "./User-Map-Location";
const Bulletin=()=>{
    return(
        <div className="flex flex-col element md:w-[30%] w-full rounded-xl border-gray-500 border-2  ">
            <h1 className=" font-extrabold text-[3rem] py-5 border-b-2 border-black">Bulletin</h1>
            <div className="flex flex-col" style={{overflow:'scroll',height:'600px'}}>
                {News.map((text,index)=>(
                    <div key={index} className="border-b-2 border-gray-500 pb-[120px]">
                        <p>{text}</p>
                       {index<3 && <img src="new.gif" alt="new" /> }
                    </div>
                )) }
            </div>

        </div>
    )
}
export default Bulletin