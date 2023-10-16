import React, { useState, useEffect } from 'react'
import { FaCog } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faUser, faEnvelope, faCog, faSignOutAlt, faAngleRight, faL, faArrowCircleLeft, faBattery, faArrowUpFromGroundWater, faCoins } from '@fortawesome/free-solid-svg-icons';
import profile from "../assets/images/profile.jpg"
import Bars from './Bars';
import { Link } from 'react-router-dom';


const SideBar = () => {

    const [showSideBar, setShowSideBar] = useState(false);
    const closeSidebar = () => {
        setShowSideBar(false);
    }
    const navLinks = {
        1: {
            "Name": "Dashboard",
            "icon": faFlag,
            "link":'/',
            "subLink": false
        },
        2: {
            "Name": "Product",
            "icon": faUser,
            "link":'products',
            "subLink": false

        },
        3: {
            "Name": "Customers",
            "icon": faEnvelope,
            "link":'customers',
            "subLink": false

        },
        4: {
            "Name": "Income",
            "icon": faCoins,
            "link":'income',
            "subLink": true

        },
        5: {
            "Name": "Promote",
            "icon": faArrowUpFromGroundWater,
            "link":'promote',
            "subLink": true
        },
        6: {
            "Name": "Help",
            "icon": faSignOutAlt,
            "link":'help',
            "subLink": true
        },
    }
    return (
        <>
        <Bars setShow={setShowSideBar} show={showSideBar} />
            <div className={showSideBar ? 'sidebar p-3 col-lg-2 col-md-3 open ' : 'sidebar p-3 col-lg-2 col-md-3'} onClick={closeSidebar} >
                
                <div className='d-flex justify-content-center align-items-center'>
                    <FaCog size={20} />
                    <h1 className='ms-2'>Dashboard</h1>
                </div>
                <div className='my-5'>
                    {Object.keys(navLinks).map((e, index) => {
                        return (
                            <div key={index} className='row align-items-center sidebar-links'>
                                <FontAwesomeIcon icon={navLinks[e].icon} className='col-1' />
                                <Link className='col-5 my-2 no-style' to={navLinks[e].link}>{navLinks[e].Name}</Link>
                                {navLinks[e].subLink ?
                                    <FontAwesomeIcon icon={faAngleRight} className='col-2' />
                                    : ""}
                            </div>
                        )
                    })}
                </div>
                <div className='profile' >
                    <img src={profile} />
                    <div>
                        <h6>Malathi</h6>
                        <small>Softower Developer</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar