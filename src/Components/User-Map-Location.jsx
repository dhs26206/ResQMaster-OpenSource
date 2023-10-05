import { useEffect, useState } from 'react';
import React  from "react";
import './danger.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import L from "leaflet";
export let lat=0;
export let long=0;
const customIcon = L.icon({
    iconUrl: "./redmark.png",
    iconSize: [32, 32], // adjust the size of the icon
    iconAnchor: [16, 32], // position the icon
    popupAnchor: [0, -32] // position the popup relative to the icon
  });
const customIconUser = L.icon({
    iconUrl: "./userblue.png",
    iconSize: [32, 32], // adjust the size of the icon
    iconAnchor: [16, 32], // position the icon
    popupAnchor: [0, -32] // position the popup relative to the icon
  });
  
const getLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                resolve({ lat, long });
            },
            (error) => {
                console.error('Error getting location:', error);
                reject(error);
            }
        );
    });
}
const Danger=({ConfirmDanger})=>{
    return(
        <div className="md:w-[66%] w-full">
            <div className="flex flex-col flex-nowrap justify-center items-center element   border-gray-500 border-2   rounded-xl">
                <img src="./exclamation.png" alt="exclamation" className="mb-5" style={{height:'80px', width:'80px'}}/>
                <h1 className="mb-5 font-extrabold  text-2xl">Are You In Danger ?</h1>
                {/* onClick() */}
                <button type="button" onClick={ConfirmDanger} className="w-64 h-10 bg-blue-700 text-white rounded-lg hover:bg-blue-500"> Yes </button>
            </div>

        </div>
    )
}
const Inter=({GetForm})=>{
    useEffect(()=>{
        getLocation().then((coords)=>{
            GetForm()
            
        }).catch((error)=>{
            console.log("Didnt got");
        })
    },[GetForm]);
    return(
        <div className="md:w-[66%] w-full">
            <div className="flex flex-col flex-nowrap justify-center items-center element   border-gray-500 border-2   rounded-xl">
                {/* <img src="./exclamation.png" alt="exclamation" className="mb-5" style={{height:'80px', width:'80px'}}/> */}
                <h1 className="mb-5 font-extrabold  text-2xl">Getting Location ...</h1>
                {/* {getLocation?GetForm:console.log("Not Got")} */}
                {/* {getLocation().catch((error)=>{
                    console.log("Didnit Get");
                })} */}
                {/* onClick() */}
                {/* <button type="button" className="w-64 h-10 bg-blue-700 text-white rounded-lg hover:bg-blue-500"> Yes </button> */}
            </div>

        </div>
    )
}
const Form=({LocationUp})=>{
    let link ="https://webhook.site/b8b49132-82ff-495b-800d-8ed04aa137f9"
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [type,setType]=useState('');
    const changeName=(event)=>{
        setName(event.target.value);
    }
    const changeNumber=(event)=>{
        setNumber(event.target.value);
    }
    const changeType=(event)=>{
        setType(event.target.value);
    }
    const Location=()=>{
        LocationUp(long,lat);
    }
    const DoPOST=(e)=>{
        e.preventDefault();
        const data={"name":name,"contactNumber":number,"longitude":long,"latitude":lat,"typeOfDisaster":type};
        fetch(link, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
        .catch((error)=>{console.log(error)});
        Location();
    }
    return(
        <div className="md:w-[66%] w-full">
            <div className="flex flex-col flex-nowrap   element   border-gray-500 border-2   rounded-xl">
                <h1 className=" text-4xl pb-10 border-b-2 border-gray-800">Fill the Following Details !</h1>
                <div className="pl-5 flex flex-col " style={{overflow: 'scroll'}}>
                <form className="" action="https://www.toptal.com/developers/postbin/1696449678839-6364536590408" method="post"  onSubmit={DoPOST}>
                <p className=" text-xs italic pb-5"><span className=" not-italic text-base font-bold :">Requestee 's Name :</span>( will be checked during verification )</p>
                <input className=" min-w-[50%] h-8 rounded-md border-2 border-gray-500 " name="name" type="text" onChange={changeName} placeholder="Enter Full Name" />
                <p className=" text-xs italic pt-12 pb-5"><span className=" not-italic text-base font-bold :">Contact No:</span></p>
                <input className=" min-w-[50%] h-8 rounded-md border-2 border-gray-500 " name="contact" type="text" onChange={changeNumber} placeholder="Mobile No" />
                <p className=" text-xs italic pt-12 pb-5"><span className=" not-italic text-base font-bold :">Type of Disaster:</span>(Description)</p>
                <input className=" min-w-[50%] h-8 rounded-md border-2 border-gray-500 " name="type" type="text" onChange={changeType} placeholder="Enter Here" />
                {/* <p className=" text-xs italic pt-12 pb-5"><span className=" not-italic text-base font-bold :">Requestee 's Name :</span>( will be checked during verification )</p>
                <input className=" min-w-[50%] h-8 rounded-md border-2 border-gray-500 " type="text" placeholder="Enter Full Name" /> */}
                <input className='hidden' type="text" name='long' value={long}/>
                <input className='hidden' type="text" name='lat' value={lat}/>
                <div className="w-full pb-10"></div>
                <button className=" w-36 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-xl "  type="submit">Submit</button>
                {/* <span className="border-gray-400 border-b-2 pt-8 min-w-[50%] "></span> */}


                </form>
                </div>
                

            </div>

        </div>
    )
}
export function MapShow({markers}) {
    console.log('MapShow component rendering...');

  return (
    <div className='  ' >
    <MapContainer className=" rounded-lg p-5 border-2 border-black md:w-[50rem] w-full element" center={[20.5937, 78.9629]} zoom={5} >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lon]} icon={customIcon}>
          <Popup>{marker.title}</Popup>
        </Marker>
        
      ))}
      (<Marker key="user" position={[lat,long]} icon={customIconUser} >
        <Popup>You are Here !</Popup>
      </Marker>)
    </MapContainer>
    </div>
  );
}


export function WillTell({Visibleid,Next,Buffer,coords}){
   
    if(Visibleid===1) return <Danger ConfirmDanger={Next}/>;
    else if (Visibleid===2) return <Inter GetForm={Next}/>
    else if(Visibleid===3) return <Form LocationUp={Buffer}/>
    else return <MapShow markers={coords} />
    
}
