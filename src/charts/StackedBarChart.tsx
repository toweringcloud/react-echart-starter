import ReactECharts from "echarts-for-react";

import useDimensionStore from "../stores/dimension.store";

const StackedBarChartExample = () => {
  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow", // 'line' or 'shadow'
      },
    },
    legend: {
      data: ["가전", "생활용품", "의류"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["1분기", "2분기", "3분기", "4분기"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "가전",
        type: "bar",
        stack: "total", // 'total' 이라는 동일한 스택 ID를 공유
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [320, 302, 301, 334],
      },
      {
        name: "생활용품",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134],
      },
      {
        name: "의류",
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234],
      },
    ],
  };

  const { width, height } = useDimensionStore();
  return <ReactECharts option={options} style={{ width, height }} />;
};

export default StackedBarChartExample;
