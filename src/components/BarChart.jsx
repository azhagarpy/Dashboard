import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

const BarChart = ({ data }) => {
  const options = {
    animationEnabled: true,
    height: 260,
    theme: "light2",
    axisY: {
      gridThickness: 0,
      tickLength: 0,
      labelFormatter: function () {
        return '';
      }
    },
    axisX: {},
    title: {
      text: `OverView Monthly Earnings`,
      horizontalAlign: "left",
      maxWidth: 300
    },
    data: [
      {
        type: "column",
        dataPoints: data // This should be dataPoints, not data
      }
    ]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default BarChart;
