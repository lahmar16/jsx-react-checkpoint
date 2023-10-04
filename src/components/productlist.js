// src/components/ProductList.js
import React from 'react';
import Product from './product';
import image1 from '../assets/11.png'


const products = [
  {
    
    image: image1,
    price: 199.999,
    icon : image1,
    name:"dog for sale"
  },
  {
   
   
},
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;