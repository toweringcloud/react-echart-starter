import React from "react";
import ReactECharts from "echarts-for-react";

const ParallelChartExample: React.FC = () => {
  // 데이터 출처: https://ecomfe.github.io/echarts-examples/examples/data/asset/data/nutrients.json (가공)
  const data = [
    ["차량 A", 8, 307, 130, 3504, 12, 70, 1],
    ["차량 B", 8, 350, 165, 3693, 11.5, 70, 1],
    ["차량 C", 8, 318, 150, 3436, 11, 70, 1],
    ["차량 D", 4, 121, 113, 2234, 12.5, 72, 2],
    ["차량 E", 6, 198, 95, 2833, 15.5, 70, 1],
    ["차량 F", 4, 97, 88, 2130, 14.5, 71, 3],
    ["차량 G", 4, 140, 90, 2264, 15.5, 71, 2],
    ["차량 H", 8, 454, 220, 4354, 9, 70, 1],
    ["차량 I", 8, 440, 215, 4312, 8.5, 70, 1],
  ];

  const schema = [
    { name: "name", index: 0, text: "차량명" },
    { name: "cylinders", index: 1, text: "실린더" },
    { name: "displacement", index: 2, text: "배기량" },
    { name: "horsepower", index: 3, text: "마력" },
    { name: "weight", index: 4, text: "중량" },
    { name: "acceleration", index: 5, text: "가속력" },
  ];

  const option = {
    parallelAxis: [
      { dim: 1, name: schema[1].text, min: 4, max: 8 },
      { dim: 2, name: schema[2].text, min: 0, max: 500 },
      { dim: 3, name: schema[3].text, min: 0, max: 250 },
      { dim: 4, name: schema[4].text, min: 2000, max: 5000 },
      { dim: 5, name: schema[5].text, min: 0, max: 20 },
    ],
    series: {
      type: "parallel",
      lineStyle: {
        width: 4,
      },
      data: data,
    },
  };

  return <ReactECharts option={option} style={{ height: "600px" }} />;
};

export default ParallelChartExample;
