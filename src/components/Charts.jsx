import React from 'react'
import BarChart from './BarChart'
import PieChart from './PieChart'

const Charts = () => {
    const data = [
        { label: "Jan", y: 10 },
        { label: "Feb", y: 13 },
        { label: "Mar", y: 24 },
        { label: "Apr", y: 23 },
        { label: "Jun", y: 32 },
        { label: "Jul", y: 12 },
        { label: "Aug", y: 67 },
        { label: "Sep", y: 34 },
        { label: "Oct", y: 43 },
        { label: "Nov", y: 65 },
        { label: "Dec", y: 44 },
    ]
    return (
        <div className='d-flex justify-content-around row gap-4'>
            <div className='barchart col-lg-7 col-11'>
                <BarChart data={data}  />
            </div>
            <div className='piechart col-lg-4 col-11'>
            <PieChart />
            </div>
        </div>
    )
}

export default Charts