import React, { useRef, useEffect } from "react";
import c3 from "c3";
import moment from "moment";
import { Flex } from "@chakra-ui/react";

const TimeSeriesChart = ({ data }) => {
  const chartRef = useRef(null);
  console.log("data", data);
  const test = data.map((obj) =>
    moment(obj["created_at"]).format("YYYY-MM-DD HH:mm")
  );
  const isAdjustedData = data[0].hasOwnProperty('a_ppg');
  const prefix = isAdjustedData ? 'a' : 'r';
  

  useEffect(() => {
    // Create the chart when the component mounts
    const chart = c3.generate({
      bindto: chartRef.current,
      data: {
        x: "x",
        xFormat: "%Y-%m-%d %H:%M", // 'xFormat' can be used as custom format of 'x'
        columns: [
          ["x", ...test],
          // ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
          //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
          ["points", ...data.map((obj) => obj[`${prefix}_ppg`])],
          ["assists", ...data.map((obj) => obj[`${prefix}_apg`])],
          ["rebounds", ...data.map((obj) => obj[`${prefix}_bpg`])],
          ["blocks", ...data.map((obj) => obj[`${prefix}_bpg`])],
          ["steals", ...data.map((obj) => obj[`${prefix}_spg`])],
        ],
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y-%m-%d %H:%M",
          },
        },
      },
      point: {
        r: 0.5,
      }
    });

    // Destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Flex width='90vw'>
      <div className="chart-container" ref={chartRef}></div>
    </Flex>
  );

  // return <div>backup</div>
};

export default TimeSeriesChart;
