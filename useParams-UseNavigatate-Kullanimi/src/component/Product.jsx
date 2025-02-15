import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import products from '../data/Products.json'

function Product({product}) {
  const navigate = useNavigate()
  return (

    <div>
        <div> Ürün Detayı</div>
        <div>
            
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={()=>navigate(`/product-detail/${product.id}`)}>Detay</button>
        </div>
        <div>
            
        </div>
    </div>
  )
}
export default Product;
