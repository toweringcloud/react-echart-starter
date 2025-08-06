import React from "react";
import ReactECharts from "echarts-for-react";

const GraphChartExample: React.FC = () => {
  const nodes = [
    { id: "0", name: "React", symbolSize: 45, category: 0 },
    { id: "1", name: "TypeScript", symbolSize: 35, category: 0 },
    { id: "2", name: "Node.js", symbolSize: 40, category: 1 },
    { id: "3", name: "Webpack", symbolSize: 30, category: 2 },
    { id: "4", name: "Babel", symbolSize: 30, category: 2 },
    { id: "5", name: "ECharts", symbolSize: 35, category: 0 },
    { id: "6", name: "Next.js", symbolSize: 38, category: 0 },
    { id: "7", name: "Docker", symbolSize: 42, category: 3 },
    { id: "8", name: "Kubernetes", symbolSize: 42, category: 3 },
  ];

  const links = [
    { source: "0", target: "1", value: 10 },
    { source: "0", target: "2", value: 8 },
    { source: "0", target: "3", value: 7 },
    { source: "0", target: "4", value: 7 },
    { source: "0", target: "5", value: 9 },
    { source: "0", target: "6", value: 12 },
    { source: "2", target: "1", value: 5 },
    { source: "3", target: "4", value: 6 },
    { source: "7", target: "8", value: 11 },
    { source: "2", target: "7", value: 8 },
    { source: "6", target: "2", value: 7 },
  ];

  const categories = [
    { name: "프레임워크/라이브러리" },
    { name: "런타임" },
    { name: "빌드 도구" },
    { name: "인프라" },
  ];

  const option = {
    title: {
      text: "기술 생태계 관계도",
      subtext: "Default layout",
      top: "bottom",
      left: "right",
    },
    tooltip: {},
    legend: [
      {
        data: categories.map((a) => a.name),
      },
    ],
    animationDurationUpdate: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [
      {
        name: "기술 관계",
        type: "graph",
        layout: "force",
        data: nodes,
        links: links,
        categories: categories,
        roam: true,
        label: {
          show: true,
          position: "right",
          formatter: "{b}",
        },
        lineStyle: {
          color: "source",
          curveness: 0.3,
        },
        emphasis: {
          focus: "adjacency",
          lineStyle: {
            width: 10,
          },
        },
        force: {
          repulsion: 200,
          edgeLength: 120,
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "600px" }} />;
};

export default GraphChartExample;
