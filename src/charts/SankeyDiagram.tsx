import React from "react";
import ReactECharts from "echarts-for-react";

import useDimensionStore from "../stores/dimension.store";

const SankeyDiagramExample: React.FC = () => {
  const options = {
    title: {
      text: "사용자 방문 경로 분석",
    },
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: [
      {
        type: "sankey",
        layout: "none",
        emphasis: {
          focus: "adjacency",
        },
        data: [
          { name: "메인 페이지" },
          { name: "제품 목록" },
          { name: "제품 상세" },
          { name: "장바구니" },
          { name: "결제" },
          { name: "이탈" },
        ],
        links: [
          { source: "메인 페이지", target: "제품 목록", value: 100 },
          { source: "메인 페이지", target: "이탈", value: 10 },
          { source: "제품 목록", target: "제품 상세", value: 80 },
          { source: "제품 목록", target: "이탈", value: 20 },
          { source: "제품 상세", target: "장바구니", value: 60 },
          { source: "제품 상세", target: "이탈", value: 20 },
          { source: "장바구니", target: "결제", value: 40 },
          { source: "장바구니", target: "이탈", value: 20 },
        ],
      },
    ],
  };

  const { width, height } = useDimensionStore();
  return <ReactECharts option={options} style={{ width, height }} />;
};

export default SankeyDiagramExample;
