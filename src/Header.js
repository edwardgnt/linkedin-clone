import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccount from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://logospng.org/download/linkedin/logo-linkedin-icon-4096.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C5603AQGSY5g9rJ_r5A/profile-displayphoto-shrink_100_100/0/1577244896497?e=1660780800&v=beta&t=iaOaAlgT9ZVRNxWTtdWvx_VATOW-THHQgsnuOApAj84"
          title="Me"
        />
      </div>
    </div>
  );
};

export default Header;
