import React from "react";
import ReactECharts from "echarts-for-react";

import useDimensionStore from "../stores/dimension.store";

const RiskMatrixChartExample: React.FC = () => {
  const risks = [
    "공급망",
    "신규 경쟁사",
    "핵심인력 이탈",
    "환율 변동",
    "규제 변경",
    "데이터 유출",
  ];
  const impacts = ["낮음", "중간", "높음", "심각"];
  const probabilities = ["매우 낮음", "낮음", "중간", "높음"];

  // [impact_idx, probability_idx, risk_idx]
  const data = [
    [3, 3, 5], // 데이터 유출: 심각, 높음
    [2, 3, 1], // 신규 경쟁사: 높음, 높음
    [3, 1, 3], // 환율 변동: 심각, 낮음
    [2, 2, 2], // 핵심인력 이탈: 높음, 중간
    [1, 2, 0], // 공급망: 중간, 중간
    [2, 0, 4], // 규제 변경: 높음, 매우 낮음
  ];

  const options = {
    title: { text: "리스크 평가 매트릭스" },
    grid: { height: "60%", top: "15%", right: "10%", left: "15%" },
    xAxis: {
      type: "category",
      data: impacts,
      name: "영향도(Impact)",
      position: "top",
      nameLocation: "middle",
      nameGap: 25,
    },
    yAxis: {
      type: "category",
      data: probabilities,
      name: "발생 가능성(Probability)",
      inverse: true,
    },
    visualMap: {
      min: 0,
      max: 4,
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: "5%",
      inRange: { color: ["#28a745", "#ffc107", "#fd7e14", "#dc3545"] }, // Green, Yellow, Orange, Red
      pieces: [
        { gte: 3, label: "최우선 관리" },
        { gte: 2, lt: 3, label: "중점 관리" },
        { gte: 1, lt: 2, label: "모니터링" },
        { lt: 1, label: "낮음" },
      ],
    },
    series: [
      {
        type: "heatmap",
        data: data.map((item) => [
          item[0],
          item[1],
          Math.round(item[0] * 0.5 + item[1] * 0.5),
        ]),
        label: {
          show: true,
          formatter: (params: { data: [number, number, number] }) =>
            risks[params.data[2]], // 히트맵 셀에 리스크 이름 표시
        },
        emphasis: {
          itemStyle: { shadowBlur: 10, shadowColor: "rgba(0, 0, 0, 0.5)" },
        },
      },
    ],
  };

  const { width, height } = useDimensionStore();
  return <ReactECharts option={options} style={{ width, height }} />;
};

export default RiskMatrixChartExample;
