// import React, { useState, useEffect } from "react";
// import * as d3 from "d3";

// export default function Graph({ dataset }) {
//   const [selectedTopic, setSelectedTopic] = useState("oil");
//   const [selectedSector, setSelectedSector] = useState("");
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     var filteredDataset = dataset.filter((d) => {
//       return (
//         d.topic === selectedTopic &&
//         (selectedSector === "" || d.sector === selectedSector)
//       );
//     });

//     setFilteredData(filteredDataset);
//   }, [selectedTopic, selectedSector, dataset]);

//   useEffect(() => {
//     var svgwidth = 500,
//       svgheight = 300,
//       barPadding = 5;
//     var barWidth = svgwidth / filteredData.length;

//     var svg = d3
//       .select(".bar-chart")
//       .attr("width", svgwidth)
//       .attr("height", svgheight);

//     svg.selectAll("rect").remove();

//     var barChart = svg
//       .selectAll("rect")
//       .data(filteredData)
//       .enter()
//       .append("rect")
//       .attr("y", function (d) {
//         return svgheight - d.intensity;
//       })
//       .attr("height", function (d) {
//         return d.intensity;
//       })
//       .attr("width", barWidth - barPadding)
//       .attr("transform", function (d, i) {
//         var translate = [barWidth * i, 0];
//         return "translate(" + translate + ")";
//       });
//   }, [filteredData]);

//   const handleTopicChange = (selectedTopic) => {
//     setSelectedTopic(selectedTopic);
//   };

//   const handleSectorChange = (selectedSector) => {
//     setSelectedSector(selectedSector);
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="">Topic:</label>
//         {/* Replace these input options with your available topics */}
//         <input
//           type="radio"
//           value="oil"
//           checked={selectedTopic === "oil"}
//           onChange={() => handleTopicChange("oil")}
//         />
//         <label htmlFor="oil">Oil</label>
//         {/* Add more input options for other available topics */}
//       </div>
//       <div>
//         <label htmlFor="">Sector:</label>
//         {/* Replace these input options with your available sectors */}
//         <input
//           type="radio"
//           value=""
//           checked={selectedSector === ""}
//           onChange={() => handleSectorChange("")}
//         />
//         <label htmlFor="all">All</label>
//         <input
//           type="radio"
//           value="Energy"
//           checked={selectedSector === "Energy"}
//           onChange={() => handleSectorChange("Energy")}
//         />
//         <label htmlFor="energy">Energy</label>
//         {/* Add more input options for other available sectors */}
//       </div>
//       <svg className="bar-chart"></svg>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

import * as d3 from "d3";

export default function Graph({ dataset }) {
  const [threshold, setThreshold] = useState(10);
  // const [topic, setTopic] = useState(oil);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Original dataset

    // Filter the dataset based on the threshold
    var filteredDataset = dataset.filter((d) => d >= threshold);

    setFilteredData(filteredDataset);
  }, [threshold]);

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
        return svgheight - d;
      })
      .attr("height", function (d) {
        return d;
      })
      .attr("width", barWidth - barPadding)
      .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
      });
  }, [filteredData]);

  const handleThresholdChange = (value) => {
    setThreshold(value);
  };

  return (
    <div>
      <div>
        <label>Select Threshold:</label>
        <div>
          <input
            type="radio"
            id="threshold50"
            name="threshold"
            value={10}
            checked={threshold === 10}
            onChange={() => handleThresholdChange(10)}
          />
          <label htmlFor="threshold50">10</label>

          <input
            type="radio"
            id="threshold100"
            name="threshold"
            value={20}
            checked={threshold === 20}
            onChange={() => handleThresholdChange(20)}
          />
          <label htmlFor="threshold100">20</label>

          <input
            type="radio"
            id="threshold200"
            name="threshold"
            value={30}
            checked={threshold === 30}
            onChange={() => handleThresholdChange(30)}
          />
          <label htmlFor="threshold200">30</label>

          <input
            type="radio"
            id="threshold300"
            name="threshold"
            value={40}
            checked={threshold === 40}
            onChange={() => handleThresholdChange(40)}
          />
          <label htmlFor="threshold300">40</label>
        </div>
      </div>
      <svg className="bar-chart"></svg>
    </div>
  );
}
