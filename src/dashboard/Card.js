import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faSearch } from "@fortawesome/free-solid-svg-icons";

function Card() {
  return (
    <>
      <div className="card--container">
        <h3 className="main--title">Today's data</h3>
        <div className="card--wrapper">
          <div className="payment--card light-purple">
            <div className="card--header">
              <div className="amount">
                <span className="title">Payment amount </span>
                <span className="amount--value">$500.00</span>
              </div>
              <FontAwesomeIcon icon={faDollarSign} className="icon" />
            </div>
            <span className="card-detail">**** **** **** 2314</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
