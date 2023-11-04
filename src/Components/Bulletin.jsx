import React from "react";
// import { News } from "./news";
// import Danger from "./User-Map-Location";
import { getBack } from "./URLutility";
const backend =getBack();
const News1 =await fetch(`${backend}/getPub`);
const News=await News1.json();
console.log(`${backend}/getPub`)
console.log(News);
const Bulletin=()=>{
    return(
        <div className="flex flex-col element md:w-[30%] w-full rounded-xl border-gray-500 border-2  ">
            <h1 className=" font-extrabold text-[3rem] py-5 border-b-2 border-black">Bulletin</h1>
            <div className="flex flex-col" style={{overflow:'scroll',height:'600px'}}>
                {News.map((object,index)=>(
                    <div key={index} className="border-b-2 border-gray-500 pb-[120px]">
                        <span className="font-bold">{object.agency_name}</span>
                        <p>{object.update_text}</p>
                        <span className=" font-semibold" >{object.date}</span>
                       {index<3 && <img src="new.gif" alt="new" /> }
                    </div>
                )) }
            </div>

        </div>
    )
}
export default Bulletin