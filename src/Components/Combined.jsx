import Bulletin from "./Bulletin";
import Danger from "./User-Map-Location";
import React from "react";

const Combined=()=>{
    return(
        <div className="flex flex-wrap mt-10 gap-3 justify-around">
            <Bulletin/>
            <Danger/>
        </div>
    )
}
export default Combined;