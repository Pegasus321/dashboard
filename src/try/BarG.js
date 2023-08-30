import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const Dashboard = ({ data }) => {
  const [selectedSector, setSelectedSector] = useState("Energy");

  const svgRef = useRef();

  useEffect(() => {
    const filteredData = data.filter((d) => d.sector === selectedSector);

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const xScale = d3
      .scaleBand()
      .domain(filteredData.map((d) => d.topic))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(filteredData, (d) => d.intensity)])
      .nice()
      .range([height, 0]);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},${height + margin.top})`)
      .call(xAxis)
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)
      .call(yAxis);

    svg
      .selectAll(".bar")
      .data(filteredData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.topic) + margin.left)
      .attr("y", (d) => yScale(d.intensity) + margin.top)
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d.intensity))
      .attr("fill", "steelblue")
      .on("mouseover", (event, d) => {
        d3.select(event.target).attr("fill", "orange");
        // Add tooltip or other interactions as needed
      })
      .on("mouseout", (event, d) => {
        d3.select(event.target).attr("fill", "steelblue");
        // Remove tooltip or other interactions as needed
      });
  }, [data, selectedSector]);

  return (
    <div>
      <label htmlFor="sector">Select Sector:</label>
      <select
        id="sector"
        value={selectedSector}
        onChange={(e) => setSelectedSector(e.target.value)}
      >
        <option value="Energy">Energy</option>
        {/* Add other options here */}
      </select>
      <svg ref={svgRef} width={800} height={500}></svg>
    </div>
  );
};

export default Dashboard;
