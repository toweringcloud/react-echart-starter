import { useState } from "react";

import EchartBar from "./charts/StackedBarChart";
import EchartCandleStick from "./charts/CandlestickChart";
import EchartFunnel from "./charts/FunnelChart";
import EchartHeatMap from "./charts/HeatmapChart";
import EchartLine from "./charts/LineChart";
import EchartParallel from "./charts/ParallelChart";
import EchartPie from "./charts/PieChart";
import EchartRadar from "./charts/RadarChart";
import EchartSankey from "./charts/SankeyDiagram";
import EchartScatter from "./charts/ScatterChart";
import EchartSunburst from "./charts/SunburstChart";
import EchartTreeMap from "./charts/TreemapChart";
import EchartWordCloud from "./charts/WordCloudChart";

const Sidebar = ({
  chartTypes,
  selectedMenu,
  setSelectedMenu,
}: {
  chartTypes: string[];
  selectedMenu: string;
  setSelectedMenu: (chart: string) => void;
}) => (
  <nav className="w-40 p-4 border-r border-slate-700">
    <h2 className="text-xl font-semibold mb-4">Chart Types</h2>
    <br />
    <ul className="text-sm">
      {chartTypes.map((menu) => (
        <li key={menu} className="mb-2 text-black">
          <button
            onClick={() => setSelectedMenu(menu)}
            className={`w-full text-left cursor-pointer rounded ${
              selectedMenu === menu
                ? "bg-blue-300 text-blue-600 font-bold"
                : "text-gray-400 border border-gray-600 hover:border-gray-300 hover:text-blue-600"
            }`}
          >
            {menu}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

const ChartCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-gray-800 rounded-lg shadow-2xl h-full flex flex-col p-6">
    <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
    <div className="flex-grow relative">{children}</div>
  </div>
);

const App = () => {
  const chartTypes = [
    "Bar",
    "Candle",
    "Funnel",
    "HeatMap",
    "Line",
    "Parallel",
    "Pie",
    "Radar",
    "Sankey",
    "Scatter",
    "Sunburst",
    "TreeMap",
    "WordCloud",
  ];
  const [selectedChart, setSelectedChart] = useState<string>(chartTypes[0]);

  const chartComponents: { [key: string]: React.ReactElement } = {
    Bar: <EchartBar />,
    Candle: <EchartCandleStick />,
    Funnel: <EchartFunnel />,
    HeatMap: <EchartHeatMap />,
    Line: <EchartLine />,
    Parallel: <EchartParallel />,
    Pie: <EchartPie />,
    Radar: <EchartRadar />,
    Sankey: <EchartSankey />,
    Scatter: <EchartScatter />,
    Sunburst: <EchartSunburst />,
    TreeMap: <EchartTreeMap />,
    WordCloud: <EchartWordCloud />,
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <header className="p-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold">Echart Sample Dashboard</h1>
        <p className="text-slate-400 mt-1">
          Using TypeScript, React, and TailwindCSS
        </p>
      </header>
      <br />
      <div className="flex gap-4">
        <Sidebar
          chartTypes={chartTypes}
          selectedMenu={selectedChart}
          setSelectedMenu={setSelectedChart}
        />
        <main className="flex-1 p-8 overflow-auto w-160 h-160">
          <ChartCard title={`${selectedChart} Chart`}>
            {chartComponents[selectedChart]}
          </ChartCard>
        </main>
      </div>
    </div>
  );
};

export default App;
