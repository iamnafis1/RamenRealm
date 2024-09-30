import { Food } from "./app/shared/models/Food";


export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Pizza',
    price: 10,
    tags: ['Fast Food', 'Cheese', 'Italian'],
    favorite: true,
    stars: 4.5,
    imageUrl: 'assets/images/food-1.jpg',
    origins: ['Italy'],
    cookTime: '20-30 mins'
  },
  {
    id: '2',
    name: 'Chicken Koftas',
    price: 12,
    tags: ['Chicken', 'Middle Eastern', 'Grilled'],
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/images/food-2.jpg',
    origins: ['Middle East'],
    cookTime: '40-50 mins'
  },
  {
    id: '3',
    name: 'Chicken Burger',
    price: 8,
    tags: ['Fast Food', 'Chicken', 'American'],
    favorite: true,
    stars: 4.7,
    imageUrl: 'assets/images/food-3.jpg',
    origins: ['USA'],
    cookTime: '15-20 mins'
  },
  {
    id: '4',
    name: 'French Fries',
    price: 5,
    tags: ['Fast Food', 'Potato', 'Snack'],
    favorite: false,
    stars: 4.3,
    imageUrl: 'assets/images/food-4.jpg',
    origins: ['Belgium', 'France'],
    cookTime: '10-15 mins'
  },
  {
    id: '5',
    name: 'Chicken Soup',
    price: 7,
    tags: ['Soup', 'Chicken', 'Healthy'],
    favorite: true,
    stars: 4.6,
    imageUrl: 'assets/images/food-5.jpg',
    origins: ['China'],
    cookTime: '30-40 mins'
  },
  {
    id: '6',
    name: 'Veg Pizza',
    price: 9,
    tags: ['Fast Food', 'Vegetarian', 'Italian'],
    favorite: false,
    stars: 4,
    imageUrl: 'assets/images/food-6.jpg',
    origins: ['Italy'],
    cookTime: '20-30 mins'
  },
  {
    id: '7',
    name: 'Ramen',
    price: 15,
    tags: ['Noodles', 'Japanese', 'Soup'],
    favorite: true,
    stars: 5,
    imageUrl: 'assets/images/food-7.jpeg',
    origins: ['Japan'],
    cookTime: '30-40 mins'
  }
];
