import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({GridList, products}) => {
   


  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList} ? "grid" : "list"`}>
        {
            products.map((product, i) => (
                <div key={i} className="col-lg-4 col-md-6 col-12">
                    <div className="product-item">
                        {/* product images */}
                        <div className="product-tumb">
                            <div className="pro-thumb">
                                <img src={product.img} alt="" />
                            </div>
                            {/* product action links */}
                            <div className="product-action-link">
                                <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                                <a href="#"><i className='icofont-heart'></i></a>
                                <Link to="/cart-page"><i className='icofont-cart-alt'></i></Link>
                            </div>
                        </div>

                        {/* product content */}
                        PAREI AQUI CONTINUAR 3:15:19
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default ProductCard