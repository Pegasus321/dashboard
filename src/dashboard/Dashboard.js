import React from "react";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "./Sidebar";
import Card from "./Card";
import img from "../image/img.png";
import styled from "styled-components";

function Dashboard() {
  return (
    <Dash>
      <div className="app">
        <Sidebar />
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
          {/* <Card /> */}
        </div>
      </div>
    </Dash>
  );
}

const Dash = styled.div``;
export default Dashboard;
