import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
const BarChart = ({data}) => {
  const options = {
    animationEnabled: true,
    height:260,
    //exportEnabled: true,
    theme: "light2", //"light1", "dark1", "dark2"
    axisY:{
      gridThickness:0,
      tickLength:0,
      labelFormatter: function(){
        return '';
      }

    },
    axisX:{

    },
    title: {
      text: `OverView Monthly Earning`,
      horizontalAlign: "left",
      maxWidth: 300
    },

    data: [
      {
        type: "column",
        dataPoints: data

      }
    ]
  };
  return (
    <div>
      <CanvasJSChart data={data} options={options} />
    </div>
  )
}


export default BarChart;


