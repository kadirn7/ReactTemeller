import React from 'react'
import Product from '../component/Product'
import products from '../data/Products.json'


function Products() {

  return (
    <div>
        {
        products.products && products.products.map((product)=>(
            <Product key={product.id} product={product}/>
        ))
        }
    </div>
  )
}
export default Products;
