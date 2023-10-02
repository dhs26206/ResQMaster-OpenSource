import React from "react";

const Navbar=({AgencyClicked,text})=>{
    return(
        <div className="w-full h-40 bg-blue-700 flex justify-between">
            <img src="logo_transparent.png" alt="logo" style={{height:'150px',width:'auto'}}/>
            <div className="flex flex-col justify-center mr-3 " >
            {/* onClick={} */}
            <button  className="w-36 h-9 bg-white rounded-lg border-2 border-white text-blue-700 hover:bg-blue-700 hover:text-white " type="button" id="agency" onClick={AgencyClicked}>{text}</button>
            </div>
            
        </div>
    );
}

export default Navbar;