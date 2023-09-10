import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/action";
import Bar from "../d3/Bar";
import Graph from "../try/Graph";

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

  const newData = new Set(data.map((item) => item.intensity));
  const unintensity = Array.from(newData);
  const filteredData = [];
  unintensity.forEach((oil) => {
    filteredData[oil] = data.filter((item) => item.sector === oil);
  });

  console.log(filteredData);

  return (
    <div>
      {/* {filteredData.map((item) => (
        <div>
          <p>{item.intensity}</p>
          <p>{item.topic}</p>
          <p>{item.region}</p>
          <p>{item.impact}</p>
        </div>
      ))} */}
      {/* <Bar data={sampleData} /> */}
      {/* <BarG data={data} /> */}
      <Graph dataset={unintensity} />
    </div>
  );
};

export default Page;
