import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/action";
import { useState } from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "./Sidebar";
import Card from "./Card";
import img from "../image/img.png";
import styled from "styled-components";

//importing sub-dashboard comp
import Faq from "./sub/Faq";
import Graph from "./sub/Graph";
import Profile from "./sub/Profile";
import Statistics from "./sub/Statistics";
import DashBo from "./sub/DashBo";

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const data = useSelector((state) => state.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  // console.log(data);
  const handleSidebarOptionClick = (component) => {
    setSelectedComponent(component);
  };
  return (
    <Dash>
      <div className="app">
        <Sidebar onOptionClick={handleSidebarOptionClick} />
        <div className="main--content">
          <div className="header--wrapper">
            <div className="header--title">
              <span>Primary</span>
              <h2>Dashboard</h2>
            </div>
            <div className="user--info">
              <div className="search--box">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="search" />
              </div>
              <img src={img} alt="pic" />
            </div>
          </div>
          <div className="Inner-box">
            {selectedComponent === "DashBo" && <DashBo />}
            {selectedComponent === "Statistics" && <Statistics />}
            {selectedComponent === "Graph" && <Graph Data={data} />}
            {selectedComponent === "Profile" && <Profile />}
            {selectedComponent === "Faq" && <Faq />}
          </div>
        </div>
      </div>
    </Dash>
  );
}

const Dash = styled.div``;
export default Dashboard;
