import { useEffect, useRef, useState } from "react";

import Bar2DChartExample from "./charts/StackedBarChart";
import Bar3DChartExample from "./charts/Bar3DChart";
import BcgMatrixChartExample from "./charts/BCGMatrixChart";
import BscRadarChartExample from "./charts/RadarChart";
import CandlestickChartExample from "./charts/CandlestickChart";
import CustomerRfmChartExample from "./charts/BubbleChart";
import FunnelChartExample from "./charts/FunnelChart";
import GraphChartExample from "./charts/GraphChart";
import HeatmapChartExample from "./charts/HeatmapChart";
import KpiForecastChartExample from "./charts/ForecastChart";
import LineChartExample from "./charts/LineChart";
import MixedChartExample from "./charts/MixedChart";
import ParallelChartExample from "./charts/ParallelChart";
import PieChartExample from "./charts/PieChart";
import RiskMatrixChartExample from "./charts/RiskMatirixChart";
import SankeyDiagramExample from "./charts/SankeyDiagram";
import ScatterChartExample from "./charts/ScatterChart";
import SunburstChartExample from "./charts/SunburstChart";
import TreemapChartExample from "./charts/TreemapChart";
import WordCloudChartExample from "./charts/WordCloudChart";

import Contents from "./layouts/Contents";
import Sidebar from "./layouts/Sidebar";

import useDimensionStore from "./stores/dimension.store";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("2D Bar Chart");
  const { setDimensions } = useDimensionStore();
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = chartContainerRef.current;
    if (container) {
      const resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]) {
          const { width, height } = entries[0].contentRect;
          setDimensions(width, height);
        }
      });
      resizeObserver.observe(container);
      return () => resizeObserver.disconnect();
    }
  }, [setDimensions]);

  const renderChart = () => {
    switch (selectedMenu) {
      case "2D Bar Chart":
        return <Bar2DChartExample />;
      case "3D Bar Chart":
        return <Bar3DChartExample />;
      case "BCG Matrix Chart":
        return <BcgMatrixChartExample />;
      case "Bubble Chart":
        return <CustomerRfmChartExample />;
      case "Candlestick Chart":
        return <CandlestickChartExample />;
      case "Forecast Chart":
        return <KpiForecastChartExample />;
      case "Funnel Chart":
        return <FunnelChartExample />;
      case "Graph Chart":
        return <GraphChartExample />;
      case "Heatmap Chart":
        return <HeatmapChartExample />;
      case "Line Chart":
        return <LineChartExample />;
      case "Mixed Chart":
        return <MixedChartExample />;
      case "Parallel Coordinates Chart":
        return <ParallelChartExample />;
      case "Pie Chart":
        return <PieChartExample />;
      case "Radar Chart":
        return <BscRadarChartExample />;
      case "Risk Matrix Chart":
        return <RiskMatrixChartExample />;
      case "Sankey Diagram Chart":
        return <SankeyDiagramExample />;
      case "Scatter Chart":
        return <ScatterChartExample />;
      case "Sunburst Chart":
        return <SunburstChartExample />;
      case "Treemap Chart":
        return <TreemapChartExample />;
      case "Word Cloud Chart":
        return <WordCloudChartExample />;
      default:
        return <Bar2DChartExample />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <Contents>
        <span className="text-xl font-bold mb-4">{selectedMenu}</span>
        <div
          ref={chartContainerRef}
          className="bg-white w-full h-full p-4 rounded-lg shadow-md overflow-hidden"
        >
          {renderChart()}
        </div>
      </Contents>
    </div>
  );
}

export default App;
