
import './App.css';
import Navbar from './Components/Navbar';
// import Danger from './Components/User-Map-Location';
import { Component } from 'react';
// import Bulletin from './Components/Bulletin';
import Combined from './Components/Combined';
import Login from './Components/Login';
class App extends Component{
  state={
    AgencyPage:false,
    Text:'Agency Login'
  }
  // AgencyHandle=()=>{
  //   this.setState(prevState=>({
  //     AgencyPage:!prevState.AgencyPage,
  //     Text:{prevState.AgencyPage ? "Home" : "Agency Login"}
  //   }));
  // }
  AgencyHandle = () => {
    this.setState(prevState => ({
      AgencyPage: !prevState.AgencyPage,
      Text: !prevState.AgencyPage ? "Home" : "Agency Login"
      
    }));
  }
  
  render(){
    
    return(
      <>
       <Navbar AgencyClicked={this.AgencyHandle} text={this.state.Text}/>
       {!this.state.AgencyPage ? <Combined /> : <Login />}
       </>
    )       
}
}
export default App;
