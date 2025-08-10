import React from "react";
import ReactECharts from "echarts-for-react";
import "echarts-wordcloud";

import useDimensionStore from "../stores/dimension.store";

const WordCloudChartExample: React.FC = () => {
  const keywords = [
    { name: "AI", value: 28 },
    { name: "React", value: 25 },
    { name: "TypeScript", value: 22 },
    { name: "Cloud", value: 20 },
    { name: "DevOps", value: 18 },
    { name: "Kubernetes", value: 17 },
    { name: "Serverless", value: 16 },
    { name: "Big Data", value: 15 },
    { name: "Machine Learning", value: 14 },
    { name: "Next.js", value: 13 },
    { name: "WebAssembly", value: 12 },
    { name: "GraphQL", value: 11 },
    { name: "Docker", value: 10 },
    { name: "FinTech", value: 9 },
    { name: "Blockchain", value: 8 },
    { name: "IoT", value: 7 },
    { name: "Cybersecurity", value: 6 },
    { name: "Edge Computing", value: 5 },
    { name: "Quantum Computing", value: 4 },
    { name: "Rust", value: 3 },
  ];

  const options = {
    tooltip: {
      show: true,
    },
    series: [
      {
        type: "wordCloud",
        shape: "circle", // 'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
        left: "center",
        top: "center",
        width: "90%",
        height: "90%",
        right: null,
        bottom: null,
        sizeRange: [12, 60], // 폰트 크기 범위
        rotationRange: [-90, 90], // 단어 회전 각도 범위
        rotationStep: 45,
        gridSize: 8, // 단어 간 간격
        drawOutOfBound: false,
        textStyle: {
          fontFamily: "sans-serif",
          fontWeight: "bold",
          // 색상을 랜덤하게 지정
          color: function () {
            return (
              "rgb(" +
              [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
              ].join(",") +
              ")"
            );
          },
        },
        emphasis: {
          focus: "self",
          textStyle: {
            textShadowBlur: 10,
            textShadowColor: "#333",
          },
        },
        data: keywords,
      },
    ],
  };

  const { height } = useDimensionStore();
  return <ReactECharts option={options} style={{ width: 500, height }} />;
};

export default WordCloudChartExample;
