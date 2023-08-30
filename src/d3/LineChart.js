import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const LineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Convert date strings to JavaScript Date objects
    data.forEach((d) => {
      d.published = new Date(d.published);
    });

    // Set up the chart dimensions
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create scales for x and y axes
    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.published))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.intensity)])
      .range([height, 0]);

    // Create line generator
    const line = d3
      .line()
      .x((d) => x(d.published))
      .y((d) => y(d.intensity));

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
      .call(d3.axisBottom(x));

    svg.append("g").call(d3.axisLeft(y));

    // Add line to chart
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default LineChart;
