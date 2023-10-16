import React from 'react'
import { FaBars } from 'react-icons/fa';

const Bars = ({setShow,show}) => {
    const setSidebar = ()=>{
        setShow(!show)
    }
    return (
        <div className='bar'onClick={setSidebar}>
            <FaBars />
        </div>
    )
}

export default Bars