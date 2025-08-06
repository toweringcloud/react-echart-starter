import React from "react";
import ReactECharts from "echarts-for-react";

const BscRadarChartExample: React.FC = () => {
  const option = {
    title: { text: "균형성과표(BSC) 분석" },
    legend: { data: ["목표치", "2025년 2분기 실적"], bottom: 5 },
    radar: {
      indicator: [
        { name: "재무 (매출 성장률)", max: 20 },
        { name: "고객 (고객 만족도)", max: 100 },
        { name: "내부 프로세스 (신제품 출시 속도)", max: 10 },
        { name: "학습과 성장 (직원 교육 이수율)", max: 100 },
      ],
      shape: "circle",
      splitNumber: 5,
    },
    series: [
      {
        name: "성과 비교",
        type: "radar",
        data: [
          {
            value: [15, 90, 8, 85],
            name: "목표치",
            areaStyle: {
              color: "rgba(119, 136, 153, 0.2)",
            },
          },
          {
            value: [12, 92, 5, 70],
            name: "2025년 2분기 실적",
            areaStyle: {
              color: "rgba(0, 191, 255, 0.4)",
            },
          },
        ],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "600px" }} />;
};

export default BscRadarChartExample;
