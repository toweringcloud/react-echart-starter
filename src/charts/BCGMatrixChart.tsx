import React from "react";
import ReactECharts from "echarts-for-react";

const BcgMatrixChartExample: React.FC = () => {
  // [상대적 시장 점유율, 시장 성장률, 매출액, 제품명]
  const data: ChartDataItem[] = [
    [1.5, 18, 2500, "제품 A (Star)"],
    [1.8, 15, 3000, "제품 B (Star)"],
    [0.4, 16, 800, "제품 C (Question Mark)"],
    [0.2, 19, 500, "제품 D (Question Mark)"],
    [1.2, 5, 5000, "제품 E (Cash Cow)"],
    [1.6, 4, 7000, "제품 F (Cash Cow)"],
    [0.3, 3, 400, "제품 G (Dog)"],
    [0.5, 2, 600, "제품 H (Dog)"],
  ];

  type ChartDataItem = [number, number, number, string]; // [점유율, 성장률, 매출액, 제품명]

  interface ScatterSeries {
    type: "scatter";
    symbolSize: (params: ChartDataItem) => number;
    data: ChartDataItem[];
    markLine: {
      silent: boolean;
      symbol: string;
      lineStyle: { type: string };
      data: Array<{ xAxis?: number; yAxis?: number }>;
    };
    markArea: {
      silent: boolean;
      itemStyle: { color: string };
      data: Array<
        [
          { name: string; xAxis: number; yAxis: string },
          { xAxis: string; yAxis: number }
        ]
      >;
    };
  }

  interface ChartOption {
    title: { text: string };
    grid: { left: string; right: string; bottom: string; top: string };
    xAxis: {
      type: string;
      name: string;
      splitLine: { show: boolean };
      axisLabel: { formatter: string };
      scale: boolean;
    };
    yAxis: {
      type: string;
      name: string;
      splitLine: { show: boolean };
      axisLabel: { formatter: string };
      scale: boolean;
    };
    tooltip: {
      formatter: (params: { data: ChartDataItem }) => string;
    };
    series: ScatterSeries[];
  }

  const option: ChartOption = {
    title: { text: "BCG 매트릭스 (Growth-Share Matrix)" },
    grid: { left: "10%", right: "10%", bottom: "10%", top: "10%" },
    xAxis: {
      type: "value",
      name: "상대적 시장 점유율",
      splitLine: { show: false },
      axisLabel: { formatter: "{value}x" },
      scale: true,
    },
    yAxis: {
      type: "value",
      name: "시장 성장률",
      splitLine: { show: false },
      axisLabel: { formatter: "{value}%" },
      scale: true,
    },
    tooltip: {
      formatter: (params: { data: ChartDataItem }) =>
        `${params.data[3]}<br/>점유율: ${params.data[0]}x<br/>성장률: ${params.data[1]}%<br/>매출: ${params.data[2]}억`,
    },
    series: [
      {
        type: "scatter",
        symbolSize: (params: ChartDataItem) => Math.sqrt(params[2]) / 2, // 매출액으로 버블 크기
        data: data,
        markLine: {
          silent: true,
          symbol: "none",
          lineStyle: { type: "dashed" },
          data: [{ xAxis: 1 }, { yAxis: 10 }],
        },
        markArea: {
          silent: true,
          itemStyle: { color: "rgba(173, 216, 230, 0.2)" },
          data: [
            [
              { name: "Star", xAxis: 1, yAxis: "max" },
              { xAxis: "max", yAxis: 10 },
            ],
          ],
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "600px" }} />;
};

export default BcgMatrixChartExample;
