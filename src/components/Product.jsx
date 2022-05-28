import React from 'react';

const Product = ({ product, image, handleAddToCart }) => {

  return (
    <div className="Products-item">
        <img key={image.hash} src={`http://localhost:1337${image}`} alt={image.name} />
      <div className="Products-item-info">
        <h2>
          {product.title}
          <span>${product.price}</span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>
        Comprar
      </button>
    </div>
  );
};

export default Product;
