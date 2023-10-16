import React from 'react'
import Layout from '../components/Layout'
import img1 from "../assets/products/img1.jpg"
import img2 from "../assets/products/img2.jpg"
import img3 from "../assets/products/img3.jpg"
import img4 from "../assets/products/img4.jpg"
import img5 from "../assets/products/img5.jpg"
import img6 from "../assets/products/img6.jpg"
import img7 from "../assets/products/img7.jpg"

const ProductPage = () => {
    const products = {
        1: { Name: "Abcd", Price: 287, Img: img1, Desc: "Some Details about the product" },
        2: { Name: "Abcd", Price: 287, Img: img2, Desc: "Some Details about the product" },
        3: { Name: "Abcd", Price: 287, Img: img3, Desc: "Some Details about the product" },
        4: { Name: "Abcd", Price: 287, Img: img4, Desc: "Some Details about the product" },
        5: { Name: "Abcd", Price: 287, Img: img5, Desc: "Some Details about the product" },
        6: { Name: "Abcd", Price: 287, Img: img6, Desc: "Some Details about the product" },
        7: { Name: "Abcd", Price: 287, Img: img7, Desc: "Some Details about the product" },
    }
    return (
        <Layout>
            <div>
                <h1 className=' ps px-5 py-lg-3 py-md-3 '>Products</h1>
                <div className='products p-row gap-5 py-5'>
                    {Object.keys(products).map((e, index) => {
                        return (
                            <div className="card col-8 col-md-4 col-lg-3 p-card " >
                                <img src={products[e].Img} className="card-img-top my-1" alt="..." />
                                <div class="card-body">
                                    <h5 className="card-title">{products[e].Name}</h5>
                                    <p className="card-text">{products[e].Desc}</p>
                                    <p href="#" className=""><b>Price :</b> $ {products[e].Price}</p>
                                    <button className='btn btn-success'>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </Layout>
    )
}

export default ProductPage