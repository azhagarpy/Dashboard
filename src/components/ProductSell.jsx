import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import img from "../assets/images/profile.jpg"
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.jpg"
import img5 from "../assets/images/img5.jpg"

const ProductSell = () => {
    const products = {
        1: {
            Name: "Azhagar",
            Img: img1,
            Stock: 54,
            Price: 765,
            TotalSales: 65
        },
        2: {
            Name: "Kumar",
            Img: img2,
            Stock: 42,
            Price: 735,
            TotalSales: 15
        },
        3: {
            Name: "Maruthi",
            Img: img3,
            Stock: 52,
            Price: 75,
            TotalSales: 815
        },
        4: {
            Name: "Azhagar",
            Img: img4,
            Stock: 54,
            Price: 765,
            TotalSales: 65
        },
        5: {
            Name: "RaaaJaGobalaChari",
            Img: img5,
            Stock: 24,
            Price: 75,
            TotalSales: 5
        },
        6: {
            Name: "Elon Musk",
            Img: img,
            Stock: 1,
            Price: 715,
            TotalSales: 615
        },
        7: {
            Name: "Azhagar",
            Img: img3,
            Stock: 54,
            Price: 765,
            TotalSales: 65
        },
        8: {
            Name: "Azhagar",
            Img: img5,
            Stock: 54,
            Price: 765,
            TotalSales: 65
        },
    }
    return (
        <div className='bg-white my-lg-5 my-md-3  p-lg-4 p-md-4 p-4'>
            <div className='d-flex justify-content-between'>
                <h4>Product Sell</h4>
                <div className='d-flex justify-content-between'>
                    <div className='search me-3 p-s'>
                        <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1rem' }} className='s-icon' />
                        <input type='text' placeholder='type somthing...' style={{ width: '11vw', fontSize: 'small' }} className='p-search'></input>
                    </div>
                    <select className='form-control '>
                        <option default='true'> Choose Duration </option>
                        <option>Last Week</option>
                        <option>Last Month</option>
                        <option>Last Year</option>
                    </select>
                </div>
            </div>
            <table className='table my-3'>
                <thead>
                    <tr>
                        <th className='text-secondary'>Product Name</th>
                        <th className='text-secondary'>stock</th>
                        <th className='text-secondary'>price</th>
                        <th className='text-secondary'>Total sales</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(products).map((e, index) => {
                        return (
                            <tr key={index}>
                                <td className='d-flex align-items-center'>
                                    <div className='me-2 product'>
                                        <img src={products[e].Img} className='p-img' />
                                    </div>
                                    <small>{products[e].Name}</small>
                                </td>
                                <td>{products[e].Stock} in Stock</td>
                                <td>${products[e].Price}</td>
                                <td>{products[e].TotalSales}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductSell