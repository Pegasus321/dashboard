import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChartBar, faCog, faQuestionCircle, faSignOut, faSignOutAlt, faTachometerAlt,faUser } from '@fortawesome/free-solid-svg-icons';


export const Sidebar = () => {
  return (
     <div className="sidebar">
        <div className="logo"></div>
        <ul className="menu" >
          <li className='active'>
            <a href="#" >
              <FontAwesomeIcon icon={faTachometerAlt} /> 
              <span> Dashboard</span>
            </a>
              </li>
              <li>
            <a href="#">
              <FontAwesomeIcon icon={faUser} /> 
              <span> Profile</span>
            </a>
          </li><li>
            <a href="#">
              <FontAwesomeIcon icon={faChartBar} /> 
              <span> Statistics</span>
            </a>
          </li><li>
            <a href="#">
              <FontAwesomeIcon icon={faQuestionCircle} /> 
              <span> FAQ</span>
            </a>
          </li><li>
            <a href="#">
              <FontAwesomeIcon icon={faCog} /> 
              <span> Settings</span>
            </a>
              </li>
              <li className='logout'>
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
  )
}
