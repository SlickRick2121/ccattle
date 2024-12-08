import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Caldwell White Label Blue Sign Tee',
    price: 30.00,
    image: '/images/white-label-tee.jpg',
    description: 'Stand out to others with this timeless classic White Label Blue Sign Tee!',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    thumbnailUrl: '/images/products/white-tee-thumb.jpg'
  },
  {
    id: 2,
    name: 'Black Label Cattle Brand Hoodie',
    price: 65.00,
    image: '/images/cattle-brand-hoodie.jpg',
    description: 'Become branded with making a change in the beef sold in stores with the Black Label Cattle Brand Hoodie!',
    colors: ['Grey', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    thumbnailUrl: '/images/products/grey-hoodie-thumb.jpg'
  },
  {
    id: 3,
    name: 'Black Label Cattle Brand Tee',
    price: 30.00,
    image: '/images/cattle-brand-tee.jpg',
    description: 'Become branded with excellence with the Black Label Cattle Brand Tee!',
    colors: ['White', 'Black', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    thumbnailUrl: '/images/products/black-tee-thumb.jpg'
  }
];