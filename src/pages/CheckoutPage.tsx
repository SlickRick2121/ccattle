import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const { state } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-western mb-8">Checkout</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-xl font-western mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <h2 className="text-xl font-western mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="p-2 border border-gray-300 rounded-md"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleChange}
                      className="p-2 border border-gray-300 rounded-md"
                      required
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                      className="p-2 border border-gray-300 rounded-md"
                      required
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-western mb-4">Payment Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      className="p-2 border border-gray-300 rounded-md"
                      required
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleChange}
                      className="p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brown-600 text-white py-3 px-6 rounded-md hover:bg-brown-700 transition-colors"
              >
                Place Order
              </button>
            </form>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-western mb-4">Order Summary</h2>
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={`${item.id}-${item.color}-${item.size}`} className="flex justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {item.color} - {item.size} x {item.quantity}
                    </p>
                  </div>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between mt-2 font-medium">
                  <span>Total</span>
                  <span>${(state.total + 5).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;