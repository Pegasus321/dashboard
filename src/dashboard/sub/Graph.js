import React, { useState, useEffect, useRef } from "react";

// import charts
import { PieChart } from "../../try/PieChart";

export default function Graph({ Data }) {
  const [chartOption, setChartOption] = useState("topic");
  const pieChartContainerRef = useRef(null);

  useEffect(() => {
    if (!Data.length || !pieChartContainerRef.current) return;

    const counts = {};
    Data.forEach((item) => {
      const ion = item[chartOption];
      if (counts[ion]) {
        counts[ion]++;
      } else {
        counts[ion] = 1;
      }
    });

    const countsData = Object.keys(counts).map((opt) => ({
      name: opt,
      value: counts[opt],
    }));

    const totalSum = countsData.reduce((sum, item) => sum + item.value, 0);
    const percentageData = countsData.map((item) => ({
      name: item.name,
      value: item.value,
      percentage: ((item.value / totalSum) * 100).toFixed(2),
    }));
    const threshold = 2;
    const percentagebelowThreshold = percentageData
      .filter((item) => parseFloat(item.percentage) < threshold)
      .reduce((sum, item) => sum + parseFloat(item.percentage), 0);
    const newData = percentageData
      .filter((item) => parseFloat(item.percentage) >= threshold)
      .concat({
        name: "other",
        percentageData: percentagebelowThreshold.toFixed(2),
      });
    const pieChart = PieChart(newData, {
      name: (d) => d.name,
      value: (d) => d.percentage,
    });
    pieChartContainerRef.current.innerHTML = "";
    pieChartContainerRef.current.append(pieChart);
  }, [Data, chartOption]);

  const handleChartOptionChange = (event) => {
    setChartOption(event.target.value);
  };

  return (
    <div className="main-graph">
      <div className="pie-chart">
        <label htmlFor="chartOption">Select Chart Option:</label>
        <select
          id="chartOption"
          value={chartOption}
          onChange={handleChartOptionChange}
        >
          <option value="topic">Topics</option>
          <option value="sector">Sectors</option>
          <option value="region">Regions</option>
          <option value="country">Country</option>
          <option value="source">Source</option>
          <option value="pestle">Pestle</option>
        </select>
        <div ref={pieChartContainerRef}></div>
      </div>
    </div>
  );
}
