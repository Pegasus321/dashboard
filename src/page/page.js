import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/action";
import Bar from "../d3/Bar";

//d3
import * as d3 from "d3";
import Lineplot from "../d3/Lineplot";
import LineChart from "../d3/LineChart";
import BarChart from "../d3/BarChart";

import OilConsumptionLineChart from "../d3/OilConsumptionLineChart";
import BarG from "../try/BarG";

const Page = () => {
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error:{error.message}</p>;
  }

  //   const newData = new Set(data.map((item) => item.intensity));
  //   const unData = Array.from(newData);
  const sampleData = [
    {
      language: "Rust",
      value: 78.9,
      color: "#000000",
    },
    {
      language: "Kotlin",
      value: 75.1,
      color: "#00a2ee",
    },
    {
      language: "Python",
      value: 68.0,
      color: "#fbcb39",
    },
    {
      language: "TypeScript",
      value: 67.0,
      color: "#007bc8",
    },
    {
      language: "Go",
      value: 65.6,
      color: "#65cedb",
    },
    {
      language: "Swift",
      value: 65.1,
      color: "#ff6e52",
    },
    {
      language: "JavaScript",
      value: 61.9,
      color: "#f9de3f",
    },
    {
      language: "C#",
      value: 60.4,
      color: "#5d2f8e",
    },
    {
      language: "F#",
      value: 59.6,
      color: "#008fc9",
    },
    {
      language: "Clojure",
      value: 59.6,
      color: "#507dca",
    },
  ];

  return (
    <div>
      {/* {unData.map((item) => (
        <p key={item.id}>{item}</p>
      ))} */}
      {/* <Bar data={sampleData} /> */}
      <BarG data={data} />
    </div>
  );
};

export default Page;
