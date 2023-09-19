import './App.css';
import Header from './components/Header';
import Footers from './components/Footer';
import AdmimDashboard from './components/AdminDashboard';
import Report from './components/Report';
import SideBar from './components/SideBar';
import Manage from './components/Manage';
import ManageDashboard from './components/ManageDashboard';
import UserDashboard from './components/UserDashboard';
import UserOrders from './components/UserOrders';
import UserProfile from './components/UserProfile';
import VisitorDashboard from './components/VisitorDashboard';
import Dropoff from './components/Dropoff';
import Complain from './components/Complain';
//import routes from './components/routes';
//import { Router}   from 'react-router';

function App() {
  const token=window.localStorage.getItem('jwt');
  if(token === null)
  {
  return (
    <div className="App">
      <Header></Header>
      <Footers></Footers>
    </div>
    
  );
  }
  else if(token==="admin")
  { 
    return(
    <div className="App">
      <SideBar></SideBar>
      <AdmimDashboard></AdmimDashboard>
  </div>);
  }
  else if (token==="admin-report")
  {
    return(
      <div className="App">
      <SideBar></SideBar>
      <Report></Report>
  </div>
    );
  }
  else if(token==="admin-manage")
  {
    return(
      <div className="App">
      <SideBar></SideBar>
      <Manage></Manage>
      </div>
    );
  }
  else if(token==="manager")
  {
    return(
      <div className="App">
      <ManageDashboard></ManageDashboard>
      <Manage></Manage>
      </div>
    );
  }
  else if(token==="user")
  {
    return(
      <div className="App">
      <UserDashboard></UserDashboard>
      <UserOrders></UserOrders>
      </div>
    );
  }
  else if(token==="user-pickup")
  {
    return(
      <div className="App">
      <UserDashboard></UserDashboard>
      <UserProfile></UserProfile>
      </div>
    );  
  }
  else if(token==="user-complain")
  {
    return(
      <div className="App">
      <UserDashboard></UserDashboard>
      <Complain></Complain>
      </div>
    );  
  }
  else if(token==='visitor')
  {  return(
    <div className="App">
    <VisitorDashboard></VisitorDashboard>
    <Dropoff></Dropoff>
    </div>);
  }
  else if(token==='visitor-order')
  {
    return (
      <div className="App">
      <VisitorDashboard></VisitorDashboard>
      <UserOrders></UserOrders>
      </div>
    );
  }
  else if(token==="visitor-complain")
  {
    return (
      <div className="App">
      <VisitorDashboard></VisitorDashboard>
      <Complain></Complain>
      </div>
    );
  }
  else{
    return(
      <div className="App">
      <Header></Header>
      <Footers></Footers>
    </div>);
  }
}

export default App;
