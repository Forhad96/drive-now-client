// Product.js
import React, { useState } from "react";

const CarDetails = () => {
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  );
  const thumbnails = [
    "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944",
    "https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c",
    "https://images.unsplash.com/photo-1528148343865-51218c4a13e6",
  ];

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  const handleAddToCart = () => {
    console.log("Added to cart");
  };

  const handleWishlist = () => {
    console.log("Added to wishlist");
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          <ProductImage
            mainImage={mainImage}
            thumbnails={thumbnails}
            onThumbnailClick={handleThumbnailClick}
          />
          <ProductDetails
            title="Premium Wireless Headphones"
            sku="WH1000XM4"
            price="349.99"
            oldPrice="399.99"
            rating="4.5"
            reviews="120"
            description="Experience premium sound quality and industry-leading noise cancellation with these wireless headphones. Perfect for music lovers and frequent travelers."
            features={[
              "Industry-leading noise cancellation",
              "30-hour battery life",
              "Touch sensor controls",
              "Speak-to-chat technology",
            ]}
            onAddToCart={handleAddToCart}
            onWishlist={handleWishlist}
          />
        </div>
      </div>
    </div>
  );
};

export default CarDetails;




const ProductDetails = ({ title, sku, price, oldPrice, rating, reviews, description, features, onAddToCart, onWishlist }) => {
  return (
    <div className="w-full md:w-1/2 px-4">
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">SKU: {sku}</p>
      <div className="mb-4">
        <span className="text-2xl font-bold mr-2">${price}</span>
        <span className="text-gray-500 line-through">${oldPrice}</span>
      </div>
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>
        ))}
        <span className="ml-2 text-gray-600">{rating} ({reviews} reviews)</span>
      </div>
      <p className="text-gray-700 mb-6">{description}</p>

      {/* Color Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Color:</h3>
        <div className="flex space-x-2">
          <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
          <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
          <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
        </div>
      </div>

      {/* Quantity Input */}
      <div className="mb-6">
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
        <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mb-6">
        <button onClick={onAddToCart} className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add to Cart
        </button>
        <button onClick={onWishlist} className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          Wishlist
        </button>
      </div>

      {/* Key Features */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


const ProductImage = ({ mainImage, thumbnails, onThumbnailClick }) => {
  return (
    <div className="w-full md:w-1/2 px-4 mb-8">
      <img src={mainImage} alt="Product" className="w-full h-auto rounded-lg shadow-md mb-4" id="mainImage" />
      <div className="flex gap-4 py-4 justify-center overflow-x-auto">
        {thumbnails.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
            onClick={() => onThumbnailClick(src)}
          />
        ))}
      </div>
    </div>
  );
};

