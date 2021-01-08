import bcrypt from 'bcryptjs';

const data = {

  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

  products: [
    {

      name: 'Puma Mens 12',
      category: 'Shoes',
      image: '/images/p1.jpg',
      price: 120,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
      countInStock: 4,
    },
    {

      name: 'Fila Mens 8',
      category: 'Shoes',
      image: '/images/p2.jpg',
      price: 100,
      brand: 'Fila',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
      countInStock: 0,
    },
    {

      name: 'Northern Small',
      category: 'Shoes',
      image: '/images/p3.jpg',
      price: 220,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
      countInStock: 9,
    },
    {

      name: 'Under Armour 9',
      category: 'Shoes',
      image: '/images/p4.jpg',
      price: 78,
      brand: 'Under Armour',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
      countInStock: 0,
    },
    {

      name: 'Puma Girls 10',
      category: 'Shoes',
      image: '/images/p5.jpg',
      price: 65,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
      countInStock: 2,
    },
    {

      name: 'Fila Girls 8',
      category: 'Shoes',
      image: '/images/p6.jpg',
      price: 139,
      brand: 'Fila',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
      countInStock: 1,
    },
  ],
};
export default data;