import React from "react";
import ReactECharts from "echarts-for-react";

import useDimensionStore from "../stores/dimension.store";

const LineChartExample: React.FC = () => {
  const options = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
      },
    ],
  };

  const { width, height } = useDimensionStore();
  return <ReactECharts option={options} style={{ width, height }} />;
};

export default LineChartExample;
