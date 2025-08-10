import React from "react";
import ReactECharts from "echarts-for-react";

import useDimensionStore from "../stores/dimension.store";

const PieChartExample: React.FC = () => {
  const options = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: 1048, name: "Desktop" },
          { value: 735, name: "Mobile" },
          { value: 580, name: "Tablet" },
          { value: 484, name: "Others" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const { width, height } = useDimensionStore();
  return <ReactECharts option={options} style={{ width, height }} />;
};

export default PieChartExample;
