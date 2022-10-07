import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Lee',
      email: 'LeeAdmin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'David',
      email: 'davidUser@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Dried Flowers and Pampas Bouquet',
      slug: 'Dried-Pampas-Bouquet',
      category: 'Bouquet',
      image: '/images/Bouquet1.jpg',
      price: 50,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
      description: 'Dried Pampas Grass, Palm and Dried Flowers Bouquet',
    },
    {
      name: 'Bohemian Handmade Macrame Shelf',
      slug: 'Macrame-Shelf',
      category: 'Shelves',
      image: '/images/Shelf1.jpg',
      price: 70,
      countInStock: 0,
      rating: 4.5,
      numReviews: 14,
      description: 'Bohemian Handmade Macrame Shelf',
    },
    {
      name: 'Minimalist wooden Plant pot',
      slug: 'wooden-plant-pot',
      category: 'Plant pot',
      image: '/images/pot1.jpg',
      price: 90,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
      description: 'Minimalist and geometric wooden Plant pot',
    },
  ],
};
export default data;
