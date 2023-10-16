import React from 'react'
import SideBar from "./SideBar"
const Layout = ({children}) => {
    return (
        <div className='f-row'>
            <div className='col-md-3 col-lg-2 col-0'>
                <SideBar />
            </div>
            <div className='col-md-9 col-lg-10  col-12 '>
                {children}
            </div>
        </div>
    )
}

export default Layout;