import React from "react";
import ReactECharts from "echarts-for-react";

const SunburstChartExample: React.FC = () => {
  const data = [
    {
      name: "경영",
      children: [
        {
          name: "인사팀",
          value: 20,
        },
        {
          name: "재무팀",
          value: 30,
        },
      ],
    },
    {
      name: "개발",
      children: [
        {
          name: "플랫폼팀",
          value: 40,
          children: [
            {
              name: "인증서버",
              value: 25,
            },
            {
              name: "알림서버",
              value: 15,
            },
          ],
        },
        {
          name: "서비스팀",
          value: 50,
          children: [
            {
              name: "A서비스",
              value: 30,
            },
            {
              name: "B서비스",
              value: 20,
            },
          ],
        },
      ],
    },
    {
      name: "마케팅",
      value: 25,
    },
  ];

  const option = {
    series: {
      type: "sunburst",
      data: data,
      radius: [60, "90%"],
      label: {
        rotate: "radial",
      },
    },
  };

  return <ReactECharts option={option} style={{ height: "600px" }} />;
};

export default SunburstChartExample;
