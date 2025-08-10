import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

import useDimensionStore from "../stores/dimension.store";

const KpiForecastChartExample: React.FC = () => {
  const options = {
    title: {
      text: "분기별 매출 실적 및 예측",
      // subtext: "실선: 실제 매출, 점선: 목표, 음영: 예측 범위",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      top: "20%",
      data: ["실제 매출", "목표 매출", "예측 매출"],
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: [
          "2024-Q1",
          "2024-Q2",
          "2024-Q3",
          "2024-Q4",
          "2025-Q1",
          "2025-Q2",
          "2025-Q3",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "매출 (억 원)",
      },
    ],
    series: [
      {
        name: "실제 매출",
        type: "line",
        smooth: true,
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 150, null, null], // 2분기까지 실적
      },
      {
        name: "목표 매출",
        type: "line",
        smooth: true,
        lineStyle: {
          width: 2,
          type: "dashed",
        },
        data: [110, 125, 140, 160, 155, 170, 180],
      },
      {
        name: "예측 매출",
        type: "line",
        smooth: true,
        stack: "Total", // For area shading
        symbol: "none",
        itemStyle: {
          color: "rgba(255, 127, 80, 0.8)",
        },
        lineStyle: {
          width: 0,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(255, 127, 80, 0.5)" },
            { offset: 1, color: "rgba(255, 127, 80, 0)" },
          ]),
        },
        // 예측 데이터 (상한선)
        data: [null, null, null, null, 150, 190, 210],
      },
      {
        name: "예측 하한", // A dummy series for the lower bound of the forecast area
        type: "line",
        smooth: true,
        stack: "Total",
        symbol: "none",
        lineStyle: {
          width: 0,
        },
        // 예측 데이터 (하한선)
        data: [null, null, null, null, 150, 140, 155],
      },
    ],
  };

  const { width, height } = useDimensionStore();
  return <ReactECharts option={options} style={{ width, height }} />;
};

export default KpiForecastChartExample;
