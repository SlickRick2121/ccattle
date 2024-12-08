import React from 'react';

const products = [
  {
    id: 1,
    name: 'Caldwell White Label Blue Sign Tee',
    price: 30.00,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
  },
  {
    id: 2,
    name: 'Black Label Cattle Brand Hoodie',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7'
  },
  {
    id: 3,
    name: 'Black Label Cattle Brand Tee',
    price: 30.00,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a'
  },
];

const Shop = () => {
  return (
    <section id="shop" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12">Shop our products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transform transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;