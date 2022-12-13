import "./sidebar.scss";
//import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { Link } from "react-router-dom";

const Sidebar = () => {
    
  return(
    <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Maintenace Dashborad</span>
          </Link>  
        </div>
        <hr/>

        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                 <li>
                     <span>Data Sets</span>    
                </li>
                <Link to="/data1" style={{ textDecoration: "none" }}>
                <li>
                    <AnalyticsIcon/>
                     <span>Data Set1</span>
                </li>
                </Link>
                <Link to="/data2" style={{ textDecoration: "none" }}>
                <li>
                    <AnalyticsIcon/>
                    <span>Data Set2</span>
                </li>
                </Link>
                <Link to="/data3" style={{ textDecoration: "none" }}>
                <li>
                    <AnalyticsIcon/>
                     <span>Data Set3</span>
                </li>
                </Link>
                <p className="title">SERVICES</p>
               
                <Link to="/system" style={{ textDecoration: "none" }}>
                <li>
                    <HealthAndSafetyOutlinedIcon/>
                    <span>System Health</span>
                  
                </li>
                </Link>
                <Link to="/system" style={{ textDecoration: "none" }}>
                <li>
                    <AlignHorizontalLeftOutlinedIcon/>
                    <span>Parameters</span>
                </li>
                </Link>
                <Link to="/system" style={{ textDecoration: "none" }}>
                <li>
                    <NotificationsOutlinedIcon/>
                    <span>Notifications</span>
                </li>
                <p className="title">USER</p>
                <Link to="/users" style={{ textDecoration: "none" }}>
                <li>
                    <Person2OutlinedIcon/>
                    <span>Users</span>
                </li>
                </Link>
                </Link>
                <Link to="/settings" style={{ textDecoration: "none" }}>
                <li>
                    <SettingsOutlinedIcon/>
                    <span>Settings</span>
                </li>
                </Link>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                <li>
                    <PortraitOutlinedIcon/>
                    <span>Profile</span>
                </li>
                </Link>
                <Link to="/logout" style={{ textDecoration: "none" }}>
                <li>
                    <LogoutOutlinedIcon/>
                    <span>Logout</span>
                </li>
                </Link>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>

    
    </div>
  )

}

export default  Sidebar