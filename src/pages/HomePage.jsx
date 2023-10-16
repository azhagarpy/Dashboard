import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBalanceScale, faShoppingCart, faSearch, faArrowUp, faArrowDown, faL } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import Charts from '../components/Charts';
import ProductSell from '../components/ProductSell';



const HomePage = () => {

    return (
        <Layout>
            <div className='homePage'>
                <div className='mx-4 d-flex justify-content-between  p-lg-2 p-md-2 p-2 mb-4 '>
                    <h4 className='ms-1'>Hello Malathi 👋</h4>
                    <div className='search p-s'>
                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.5rem' }} className='s-icon' />
                        <input type='text' placeholder='type somthing...'></input>
                    </div>
                </div>
                <div className=' a-row  row justify-content-around'>
                    <div className='col-lg-2 col-md-5 a-card col-10'>
                        <div>
                            <FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '3rem' }} />
                        </div>
                        <div className='txt'>
                            <p>Earnings</p>
                            <h3>$198k</h3>
                            <small><span className='text-success'><FontAwesomeIcon icon={faArrowUp} /> 37.8% </span>this month</small>
                        </div>
                    </div>
                    <div className='a-card col-lg-2 col-md-5 col-10'>
                        <div>
                            <FontAwesomeIcon icon={faBalanceScale} style={{ fontSize: '3rem' }} />
                        </div>
                        <div className='txt'>
                            <p>Orders</p>
                            <h3>2198</h3>
                            <small><span className='text-danger'><FontAwesomeIcon icon={faArrowDown} /> 0.8% </span>this month</small>
                        </div>
                    </div>
                    <div className='a-card col-lg-2 col-md-5 col-10'>
                        <div>
                            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '2.5rem' }} />
                        </div>
                        <div className='txt'>
                            <p>Balance</p>
                            <h3>$698k</h3>
                            <small><span className='text-success'><FontAwesomeIcon icon={faArrowUp} /> 37.8% </span>this month</small>
                        </div>
                    </div>
                    <div className='a-card col-lg-2 col-md-5 col-10'>
                        <div>
                            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '2.5rem' }} />
                        </div>
                        <div className='txt'>
                            <p>Total Sales</p>
                            <h3>$1298k</h3>
                            <small><span className='text-danger'><FontAwesomeIcon icon={faArrowDown} /> 7.8% </span>this month</small>
                        </div>
                    </div>
                </div>
                <div className='mx-lg-5'>
                    <Charts />
                </div>
                <div className='mx-lg-5'>
                    <ProductSell />
                </div>
            </div>

        </Layout>

    )
}

export default HomePage