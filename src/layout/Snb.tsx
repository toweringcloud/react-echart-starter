import React from "react";

interface SnbProps {
  onSelectMenu: (menu: string) => void;
}

const Snb: React.FC<SnbProps> = ({ onSelectMenu }) => {
  const menus = [
    "2D Bar Chart",
    "3D Bar Chart",
    "BCG Matrix Chart",
    "Bubble Chart",
    "Candlestick Chart",
    "Forecast Chart",
    "Funnel Chart",
    "Graph Chart",
    "Heatmap Chart",
    "Line Chart",
    "Mixed Chart",
    "Parallel Coordinates Chart",
    "Pie Chart",
    "Radar Chart",
    "Risk Matrix Chart",
    "Sankey Diagram Chart",
    "Scatter Chart",
    "Sunburst Chart",
    "Treemap Chart",
    "Word Cloud Chart",
  ];

  return (
    <aside className="w-64 bg-white p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">ECharts Examples</h2>
      <ul>
        {menus.map((menu) => (
          <li
            key={menu}
            className="p-2 hover:bg-gray-200 cursor-pointer rounded"
            onClick={() => onSelectMenu(menu)}
          >
            {menu}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Snb;
