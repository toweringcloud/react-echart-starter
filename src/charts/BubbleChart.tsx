import React from "react";
import ReactECharts from "echarts-for-react";

const CustomerRfmChartExample: React.FC = () => {
  // [Recency(낮을수록 좋음), Frequency, Monetary, 고객 ID]
  type RfmKey = "Champions" | "Loyal Customers" | "At-Risk" | "Lost";
  const data: Record<RfmKey, number[][]> = {
    Champions: [
      [5, 20, 5000],
      [10, 18, 4500],
      [8, 22, 5200],
    ],
    "Loyal Customers": [
      [30, 10, 2000],
      [40, 8, 1800],
      [35, 12, 2200],
    ],
    "At-Risk": [
      [150, 3, 800],
      [180, 4, 900],
      [160, 2, 750],
    ],
    Lost: [
      [300, 1, 100],
      [350, 1, 50],
      [400, 2, 120],
    ],
  };

  interface SeriesEmphasisLabel {
    show: boolean;
    formatter: (params: { data: number[] }) => string;
    position: string;
  }

  interface SeriesEmphasis {
    focus: string;
    label: SeriesEmphasisLabel;
  }

  interface SeriesItem {
    name: RfmKey;
    data: number[][];
    type: "scatter";
    symbolSize: (params: number[]) => number;
    emphasis: SeriesEmphasis;
  }

  const series: SeriesItem[] = (Object.keys(data) as RfmKey[]).map((key) => ({
    name: key,
    data: data[key],
    type: "scatter",
    symbolSize: (params: number[]) => Math.sqrt(params[2]) / 5, // Monetary 값으로 버블 크기 결정
    emphasis: {
      focus: "series",
      label: {
        show: true,
        formatter: (params: { data: number[] }) =>
          `R: ${params.data[0]} F: ${params.data[1]} M: ${params.data[2]}`,
        position: "top",
      },
    },
  }));

  const option = {
    title: { text: "RFM 고객 세분화 분석" },
    grid: { left: "10%", right: "7%", bottom: "10%" },
    legend: {
      right: "10%",
      data: Object.keys(data),
    },
    xAxis: {
      type: "value",
      name: "Recency (최근 방문일)",
      inverse: true,
      nameLocation: "middle",
      nameGap: 30,
    },
    yAxis: {
      type: "value",
      name: "Frequency (방문 빈도)",
      nameLocation: "middle",
      nameGap: 30,
    },
    tooltip: {
      trigger: "item",
      formatter:
        "{a}<br/>Recency: {c}[0]<br/>Frequency: {c}[1]<br/>Monetary: {c}[2]",
    },
    series: series,
  };

  return <ReactECharts option={option} style={{ height: "600px" }} />;
};

export default CustomerRfmChartExample;
