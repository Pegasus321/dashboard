import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const OilConsumptionLineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Set up chart dimensions
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Apply data smoothing/aggregation
    const binWidth = 5; // Adjust as needed
    const binnedData = d3
      .bin()
      .value((d) => d.start_year)
      .thresholds(
        d3.range(
          d3.min(data, (d) => d.start_year),
          d3.max(data, (d) => d.start_year),
          binWidth
        )
      )(data);

    // Create scales for x (year) and y (intensity) axes
    const x = d3.scaleLinear().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    // Set domain for scales
    x.domain(d3.extent(data, (d) => d.start_year));
    y.domain([0, d3.max(data, (d) => d.intensity)]);

    // Create line generator for aggregated data
    const line = d3
      .line()
      .x((d) => x(new Date(d.x0))) // Use the midpoint of the bin as x value
      .y((d) => y(d3.mean(d, (e) => e.intensity))); // Use the mean of the bin values for y value

    // Clear previous content
    svg.selectAll("*").remove();

    // Create SVG container
    svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Add x and y axes
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.format("d"))); // Format x-axis ticks as integers

    svg.append("g").call(d3.axisLeft(y));

    // Add line to chart using aggregated data
    svg.append("path").datum(binnedData).attr("class", "line").attr("d", line);

    // Add chart title
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0 - margin.top / 2)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .text("Oil Consumption Trends Over Time");
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default OilConsumptionLineChart;
