import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.css';

const Products = () => {
  const { products, image, addToCart } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    const random = Math.floor(Math.random() * 1000);
    const newProduct = { ...product, cartId: `${product.id}-${random}` };
    addToCart(newProduct);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product, i) => (
          <Product
            key={product.id}
            image={image[i].url}
            product={product.attributes}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
