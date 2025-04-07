
import React from 'react';


const ProductSection = () => {

  return (
    <section className="product-section" id="shop">
      <h2>Featured Products</h2>
      <div className="product-container">
        <div className="product-item">
          <img src="https://tse4.mm.bing.net/th?id=OIP.mMe_EdV0_5xbqEYqXdVFcwHaJQ&pid=Api" alt="Product 1" />
          <h3>Men's T-Shirt</h3>
          <p>$25.00</p>
        </div>
        <div className="product-item">
          <img src="https://tse3.mm.bing.net/th?id=OIP.3njn_wfGlQuZMHkxx5HXWgHaJ4&pid=Api" alt="Product 2" />
          <h3>men’s Hoodie</h3>
          <p>$40.00</p>
        </div>
        {/* Add more products as needed */}
      </div>
    </section>
  );
};

export default ProductSection;
