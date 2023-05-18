import React, { useRef, useEffect } from "react";
import c3 from "c3";
import moment from 'moment';

const TimeSeriesChart = ({ data }) => {
  const chartRef = useRef(null);
  console.log('data', data);
  const test = data.map(obj => moment(obj['created_at']).format('YYYY-MM-DD HH:mm:ss'))
  console.log('test', test);
  
  
  useEffect(() => {
    // Create the chart when the component mounts
    const chart = c3.generate({
      bindto: chartRef.current,
      data: {
        x: "x",
        xFormat: '%Y-%m-%d %H:%M:%S', // 'xFormat' can be used as custom format of 'x'
        columns: [
          ["x", ...test],
          // ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
          //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
          ["points", ...data.map(obj => obj['r_ppg'])],
          ["assists", ...data.map(obj => obj['r_apg'])],
          ["rebounds", ...data.map(obj => obj['r_rpg'])],
          ["blocks", ...data.map(obj => obj['r_bpg'])],
          ["steals", ...data.map(obj => obj['r_spg'])],
        ],
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: '%Y-%m-%d %H:%M:%S',
          },
        },
      },
    });

    // Destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, []);
  

  return <div className='chart-container' ref={chartRef}></div>;
  
  // return <div>backup</div>
};

export default TimeSeriesChart;
