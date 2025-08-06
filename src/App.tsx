import { useState } from "react";

import Snb from "./layout/Snb";
import Contents from "./layout/Contents";

import Bar2DChartExample from "./charts/StackedBarChart";
import Bar3DChartExample from "./charts/Bar3DChart";
import BcgMatrixChartExample from "./charts/BCGMatrixChart";
import BscRadarChartExample from "./charts/RadarChart";
import CandlestickChartExample from "./charts/CandleStickChart";
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
import TreemapChartExample from "./charts/TreeMapChart";
import WordCloudChartExample from "./charts/WordCloudChart";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Bar Chart");

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
      <Snb onSelectMenu={setSelectedMenu} />
      <Contents>
        <h1 className="text-2xl font-bold mb-4">{selectedMenu}</h1>
        {renderChart()}
      </Contents>
    </div>
  );
}

export default App;
