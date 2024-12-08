import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium group-hover:text-brown-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;