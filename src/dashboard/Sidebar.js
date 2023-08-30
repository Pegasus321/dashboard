import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChartBar,
  faCog,
  faQuestionCircle,
  faSignOut,
  faSignOutAlt,
  faTachometerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Sidebar = ({ onOptionClick }) => {
  const [activeOption, setActiveOption] = useState("DashBo");

  const handleSidebarClick = (component) => {
    setActiveOption(component);
    onOptionClick(component);
  };
  return (
    <div className="sidebar">
      <div className="logo"></div>
      <ul className="menu">
        <li className={activeOption === "DashBo" ? "active" : ""}>
          <a href="#" onClick={() => handleSidebarClick("DashBo")}>
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span> Dashboard</span>
          </a>
        </li>
        <li className={activeOption === "Profile" ? "active" : ""}>
          <a href="#" onClick={() => handleSidebarClick("Profile")}>
            <FontAwesomeIcon icon={faUser} />
            <span> Profile</span>
          </a>
        </li>
        <li className={activeOption === "Statistics" ? "active" : ""}>
          <a href="#" onClick={() => handleSidebarClick("Statistics")}>
            <FontAwesomeIcon icon={faChartBar} />
            <span> Statistics</span>
          </a>
        </li>
        <li className={activeOption === "Faq" ? "active" : ""}>
          <a href="#" onClick={() => handleSidebarClick("Faq")}>
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span> FAQ</span>
          </a>
        </li>
        <li className={activeOption === "Graph" ? "active" : ""}>
          <a href="#" onClick={() => handleSidebarClick("Graph")}>
            <FontAwesomeIcon icon={faCog} />
            <span> Graph</span>
          </a>
        </li>
        <li className="logout">
          <a href="#">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span> Logout</span>
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span> Extra</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
