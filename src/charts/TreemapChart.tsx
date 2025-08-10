import React from "react";
import ReactECharts from "echarts-for-react";

import useDimensionStore from "../stores/dimension.store";

const TreemapChartExample: React.FC = () => {
  const data = [
    {
      name: "C Drive",
      value: 100,
      children: [
        {
          name: "Program Files",
          value: 40,
          children: [
            { name: "App A", value: 25 },
            { name: "App B", value: 15 },
          ],
        },
        {
          name: "Users",
          value: 30,
          children: [
            { name: "User 1", value: 20 },
            { name: "User 2", value: 10 },
          ],
        },
        { name: "Windows", value: 20 },
        { name: "Others", value: 10 },
      ],
    },
  ];

  const options = {
    series: [
      {
        type: "treemap",
        data: data,
        levels: [
          {
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 2,
              gapWidth: 2,
            },
          },
          {
            colorSaturation: [0.3, 0.6],
            itemStyle: {
              borderColorSaturation: 0.7,
              gapWidth: 1,
              borderWidth: 2,
            },
          },
        ],
      },
    ],
  };

  const { width, height } = useDimensionStore();
  return <ReactECharts option={options} style={{ width, height }} />;
};

export default TreemapChartExample;
