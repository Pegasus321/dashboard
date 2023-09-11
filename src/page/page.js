// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchData } from "../redux/action";

// import Graph from "../try/Graph";

// //d3

// const Page = () => {
//   const data = useSelector((state) => state.data.data);
//   const loading = useSelector((state) => state.data.loading);
//   const error = useSelector((state) => state.data.error);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   if (error) {
//     return <p>Error:{error.message}</p>;
//   }

//   const newData = new Set(data.map((item) => item.intensity));
//   const unintensity = Array.from(newData);
//   const filteredData = [];
//   unintensity.forEach((oil) => {
//     filteredData[oil] = data.filter((item) => item.sector === oil);
//   });

//   console.log(filteredData);

//   return (
//     <div>
//       {/* {filteredData.map((item) => (
//         <div>
//           <p>{item.intensity}</p>
//           <p>{item.topic}</p>
//           <p>{item.region}</p>
//           <p>{item.impact}</p>
//         </div>
//       ))} */}
//       {/* <Bar data={sampleData} /> */}
//       {/* <BarG data={data} /> */}
//       <Graph dataset={data} />
//     </div>
//   );
// };

// export default Page;

import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/action";

import Graph from "../try/Graph";
import { PieChart } from "../try/PieChart"; // Import your PieChart function

const Page = () => {
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // CHART 1
  const pieChartContainerRef = useRef(null);

  useEffect(() => {
    // Check if the data array is empty or if the container ref is not available
    if (!data.length || !pieChartContainerRef.current) return;

    // // Customize your pie chart configuration here
    // const config = {
    //   width: 400,
    //   height: 400,
    //   // Customize other configuration options as needed
    // };

    const sectorCounts = {};
    data.forEach((item) => {
      const sector = item.sector;
      if (sectorCounts[sector]) {
        sectorCounts[sector]++;
      } else {
        sectorCounts[sector] = 1;
      }
    });
    const sectorData = Object.keys(sectorCounts).map((sector) => ({
      name: sector,
      value: sectorCounts[sector],
    }));
    // console.log(sectorData);

    const totalSum = sectorData.reduce((sum, item) => sum + item.value, 0);

    const percentageData = sectorData.map((item) => ({
      name: item.name,
      value: item.value,
      percentage: ((item.value / totalSum) * 100).toFixed(2),
    }));
    const threshold = 2; // Define the threshold for data below 5%

    // Calculate the sum of data below 5%
    const sumBelowThreshold = percentageData
      .filter((item) => parseFloat(item.percentage) < threshold)
      .reduce((sum, item) => sum + parseFloat(item.percentage), 0);

    // Create a new array with both sectors above 5% and "Other"
    const newData = percentageData
      .filter((item) => parseFloat(item.percentage) >= threshold) // Sectors above or equal to 5%
      .concat({ name: "Other", percentage: sumBelowThreshold.toFixed(2) }); // "Other" category
    // Create the pie chart
    // const pieChart = PieChart(data, config);
    const pieChart1 = PieChart(newData, {
      name: (d) => d.name,
      value: (d) => d.percentage,
    });

    // Clear any existing content in the container
    pieChartContainerRef.current.innerHTML = "";

    // Append the pie chart to the container
    pieChartContainerRef.current.appendChild(pieChart1);
  }, [data]);

  // CHART2
  const pieChartContainerRef2 = useRef(null);
  useEffect(() => {
    if (!data.length || !pieChartContainerRef.current) return;

    const topicCounts = {};
    data.forEach((item) => {
      const topic = item.topic;
      if (topicCounts[topic]) {
        topicCounts[topic]++;
      } else {
        topicCounts[topic] = 1;
      }
    });
    const topicData = Object.keys(topicCounts).map((item) => ({
      name: item,
      value: topicCounts[item],
    }));

    const threshold = 8;

    const sumBelowThreshold = topicData
      .filter((item) => parseFloat(item.value) < threshold)
      .reduce((sum, item) => sum + parseFloat(item.value), 0);

    const newData = topicData
      .filter((item) => parseFloat(item.value) >= threshold)
      .concat({ name: "other", value: sumBelowThreshold });

    console.log(newData);

    const piechart2 = PieChart(newData, {
      name: (d) => d.name,
      value: (d) => d.value,
    });
    pieChartContainerRef2.current.innerHTML = "";

    pieChartContainerRef2.current.appendChild(piechart2);
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {/* Render your other components */}
      <Graph dataset={data} />

      {/* Create a container for the pie chart */}
      <div ref={pieChartContainerRef}></div>
      <div ref={pieChartContainerRef2}></div>
    </div>
  );
};

export default Page;
