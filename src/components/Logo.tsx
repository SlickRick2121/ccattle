import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src="/images/logo.png" alt="CLCC Logo" className="h-12" />
      <span className="text-xl font-serif">Caldwell Land + Cattle Co.</span>
    </Link>
  );
};

export default Logo;