import React from "react";
import ReactECharts from "echarts-for-react";

const CandlestickChartExample: React.FC = () => {
  const options = {
    xAxis: {
      data: [
        "2025-08-01",
        "2025-08-02",
        "2025-08-03",
        "2025-08-04",
        "2025-08-05",
      ],
    },
    yAxis: {},
    series: [
      {
        type: "candlestick",
        data: [
          [20, 34, 10, 38], // [open, close, lowest, highest]
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42],
          [18, 25, 12, 30],
        ],
      },
    ],
  };
  return <ReactECharts option={options} style={{ height: 400 }} />;
};

export default CandlestickChartExample;
