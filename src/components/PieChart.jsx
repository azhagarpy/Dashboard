import React, { useEffect, useState } from 'react';
import { CanvasJSChart } from "canvasjs-react-charts";

const PieChart = () => {
  const [chartVisible, setChartVisible] = useState(false);

  const options = {
    animationEnabled: true,
    responsive: true,
    height: 260,
    maintainAspectRatio: false,
    title: {
      text: "Customers",
    },
    subtitles: [
      {
        text: `80% New Customers`,
        verticalAlign: "center",
        horizontalAlign: "center",
        fontSize: 20,
        maxWidth: 150,
      },
    ],
    data: [
      {
        type: "doughnut",
        showLegent: "true", // Typo: It should be "showLegend", not "showLegent"
        indexLabel: "{name}:{y}",
        dataPoints: [
          { name: "Older", y: 5 },
          { name: "New", y: 80 },
          { name: "bending", y: 15 },
        ],
      },
    ],
  };

  useEffect(() => {
    // Delay the rendering of the chart for 3 seconds (3000 milliseconds)
    const timer = setTimeout(() => {
      setChartVisible(true);
    }, 1000);

    // Clear the timer when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {chartVisible && <CanvasJSChart options={options} />}
    </div>
  );
};

export default PieChart;
