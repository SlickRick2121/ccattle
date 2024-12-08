import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-serif">{product.name}</h1>
            <p className="text-2xl text-gray-900">${product.price.toFixed(2)}</p>
            <p className="text-gray-600">{product.description}</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Color</label>
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500"
                >
                  <option value="">Select Color</option>
                  {product.colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500"
                >
                  <option value="">Select Size</option>
                  {product.sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="mt-1 block w-32 rounded-md border-gray-300 shadow-sm focus:border-brown-500 focus:ring-brown-500"
                />
              </div>

              <button
                className="w-full bg-brown-600 text-white py-3 px-6 rounded-md hover:bg-brown-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;