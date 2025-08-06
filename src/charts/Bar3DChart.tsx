import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import "echarts-gl";

const Bar3DChartExample: React.FC = () => {
  const hours = [
    "12a",
    "1a",
    "2a",
    "3a",
    "4a",
    "5a",
    "6a",
    "7a",
    "8a",
    "9a",
    "10a",
    "11a",
    "12p",
    "1p",
    "2p",
    "3p",
    "4p",
    "5p",
    "6p",
    "7p",
    "8p",
    "9p",
    "10p",
    "11p",
  ];
  const days = ["토", "금", "목", "수", "화", "월", "일"];

  const [data, setData] = useState<number[][]>([]);

  useEffect(() => {
    const generatedData = [];
    for (let i = 0; i < hours.length; i++) {
      for (let j = 0; j < days.length; j++) {
        generatedData.push([i, j, Math.round(Math.random() * 60)]);
      }
    }
    setData(generatedData);
  }, [days.length, hours.length]);

  const option = {
    tooltip: {},
    visualMap: {
      max: 60,
      inRange: {
        color: [
          "#313695",
          "#4575b4",
          "#74add1",
          "#abd9e9",
          "#e0f3f8",
          "#ffffbf",
          "#fee090",
          "#fdae61",
          "#f46d43",
          "#d73027",
          "#a50026",
        ],
      },
    },
    xAxis3D: {
      type: "category",
      data: hours,
    },
    yAxis3D: {
      type: "category",
      data: days,
    },
    zAxis3D: {
      type: "value",
      name: "사용 시간(분)",
    },
    grid3D: {
      boxWidth: 200,
      boxDepth: 80,
      viewControl: {
        projection: "orthographic",
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true,
        },
        ambient: {
          intensity: 0.3,
        },
      },
    },
    series: [
      {
        type: "bar3D",
        data: data,
        shading: "lambert",
        label: {
          show: false,
          fontSize: 16,
          borderWidth: 1,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            color: "#900",
          },
          itemStyle: {
            color: "#900",
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "600px" }} />;
};

export default Bar3DChartExample;
