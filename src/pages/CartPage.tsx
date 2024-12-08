import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif mb-8">Shopping Cart</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {/* Cart items will go here */}
            <p className="text-gray-600">Your cart is empty</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>$0.00</span>
                </div>
              </div>
            </div>
            <button
              className="w-full bg-brown-600 text-white py-3 px-6 rounded-md hover:bg-brown-700 transition-colors mt-6"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;