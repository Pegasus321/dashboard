import React, { useState, useEffect } from "react";

import * as d3 from "d3";

export default function Graph({ dataset }) {
  const [bTopic, setTopic] = useState("oil");
  const [bSector, setSector] = useState("Energy");
  const [bPestle, setPestle] = useState("Social");
  const [filteredData, setFilteredData] = useState([]);

  // generating options
  const uniqueTopics = [...new Set(dataset.map((item) => item.topic))];
  const uniqueSector = [...new Set(dataset.map((d) => d.sector))];

  useEffect(() => {
    var BarData = dataset.filter((d) => {
      return d.topic === bTopic && d.sector === bSector && d.pestle === bPestle;
    });
    setFilteredData(BarData);
  }, [bTopic, bSector, dataset]);

  useEffect(() => {
    // Create or update the graph when filteredData changes
    var svgwidth = 500,
      svgheight = 300,
      barPadding = 5;
    var barWidth = svgwidth / filteredData.length;

    // Select the SVG element by its class
    var svg = d3
      .select(".bar-chart") // Use className instead of class
      .attr("width", svgwidth)
      .attr("height", svgheight);

    // Remove any existing bars
    svg.selectAll("rect").remove();

    // Create the bars based on filtered data
    var barChart = svg
      .selectAll("rect")
      .data(filteredData)
      .enter()
      .append("rect")
      .attr("y", function (d) {
        return svgheight - d.intensity;
      })
      .attr("height", function (d) {
        return d.intensity;
      })
      .attr("width", barWidth - barPadding)
      .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
      });
  }, [filteredData]);

  const handleSectorChange = (e) => {
    setSector(e.target.value);
  };
  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  // console.log(filteredData);
  return (
    <div>
      <div className="topic-options">
        <label htmlFor="topicDropdown">Topic:</label>
        <select id="topicDropdown" value={bTopic} onChange={handleTopicChange}>
          {uniqueTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="sector-options">
        <label htmlFor="sectorDropdown">Sector:</label>
        <select
          id="sectorDropdown"
          value={bSector}
          onChange={handleSectorChange}
        >
          {uniqueSector.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
      </div>

      <svg className="bar-chart"></svg>
    </div>
  );
}
