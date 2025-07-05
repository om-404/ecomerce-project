import React from 'react'
import ProductCard from './ProductCard.jsx'

const ProductList = () => {
  return (
    <div className="w-[93vw] grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-5 place-content-center my-18">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
  )
}

export default ProductList