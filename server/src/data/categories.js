import mongoose from "mongoose";
const { mongo } = mongoose;
const ObjectID = mongo.ObjectId;
const categories = [
  {
    admin: new ObjectID('614ff307cc06fd71f6943615'),
    name: 'Electronics',
    image: '/images/airpods.jpg',
    description: 'Electronics applicances',
  },
  {
    admin: new ObjectID('614ff307cc06fd71f6943615'),
    name: 'Stationary',
    image: '/images/airpods.jpg',
    description: 'Pens and pencils',
  },
  {
    admin: new ObjectID('614ff307cc06fd71f6943615'),
    name: 'Groceries',
    image: '/images/airpods.jpg',
    description: 'Fresh Groceries',
  },
  {
    admin: new ObjectID('614ff307cc06fd71f6943615'),
    name: 'Hand Tools',
    image: '/images/airpods.jpg',
    description: 'Hardware Tools for machinery',
  },
]
export default categories;
