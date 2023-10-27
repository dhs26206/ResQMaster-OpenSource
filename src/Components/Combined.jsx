import Bulletin from "./Bulletin";
import{ WillTell,lat,long} from "./User-Map-Location";
import React ,{useState} from "react";
// import data from "./Agencies-Location.json";
// import sampleMarkers from './markers.json';
const backend ="http://127.0.0.1:3005";
const datapre = await fetch(`${backend}/getAgencies`);
const data= await datapre.json();
console.log(data);
// import { MapShow } from "./map check";

const Combined=()=>{
    const [presentVisible,ChangeVisible]=useState(1);
    // const [userLocation, setUserLocation] = useState({ userlat: 0, userlong: 0 });
    const Next1=()=>{
        if(presentVisible!==3) ChangeVisible(presentVisible+1); 
        else ChangeVisible(4);
    }
    // const setLat=(event)=>{
    //     console.log(event);
    // }
    // const setLong=(event)=>{
    //     console.log(event);
    // }
    const handleLocationUpdate=()=>{
        console.log(long,"Heyy");
        console.log(lat,"Lattitude");
        Next1();
    }
    
    return(
        <div className="flex flex-wrap mt-10 gap-3 justify-around">
            <Bulletin/>
            <WillTell Visibleid={presentVisible} Next={Next1}  Buffer={handleLocationUpdate} coords={data}/>
            
        </div>
    )
}
export default Combined;