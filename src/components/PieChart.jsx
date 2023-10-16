import React from 'react'
import {CanvasJSChart} from "canvasjs-react-charts"
const PieChart = () => {

    const options ={
        animationEnabled:true,
        responsive	:true,
        height:260,
        maintainAspectRatio:false,
        title:{
            text:"Customers"
        },
        subtitles:[{
            text:`80% New Customers`,
            verticalAlign:"center",
            horizontalAlign:"center",
            fontSize:20,
            maxWidth: 150,
        }],
        data:[
            {
                type:"doughnut",
                showLegent:"true",
                indexLabel:"{name}:{y}",
                dataPoints:[
                    {name:"success",y:5},
                    {name:"fail",y:80},
                    {name:"bending",y:15},
                ]
            }
        ]
    }
  return (
    <div>
        <CanvasJSChart options={options}/>
    </div>
  )
}

export default PieChart