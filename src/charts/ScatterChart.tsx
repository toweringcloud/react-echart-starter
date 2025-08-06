import React from "react";
import ReactECharts from "echarts-for-react";

const ScatterChartExample: React.FC = () => {
  const data = [
    [1, 55],
    [2, 60],
    [2.5, 68],
    [3, 72],
    [3.5, 75],
    [4, 80],
    [4.5, 82],
    [5, 88],
    [5.5, 90],
    [6, 94],
    [7, 98],
  ];

  const options = {
    xAxis: { name: "Study Hours" },
    yAxis: { name: "Exam Score" },
    series: [
      {
        symbolSize: 20,
        data: data,
        type: "scatter",
      },
    ],
  };

  return <ReactECharts option={options} style={{ height: 400 }} />;
};

export default ScatterChartExample;
