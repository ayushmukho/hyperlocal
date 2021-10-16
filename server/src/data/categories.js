import mongoose from "mongoose";
const { mongo } = mongoose;
const ObjectID = mongo.ObjectId;
const categories = [
  {
    admin: new ObjectID("614ff307cc06fd71f6943615"),
    name: "Electronics",
    coverImage: "https://source.unsplash.com/PDX_a_82obo/1600x425",
    description: "Electronics applicances",
  },
  {
    admin: new ObjectID("614ff307cc06fd71f6943615"),
    name: "Stationary",
    coverImage: "https://source.unsplash.com/pSz3JFTDZMA/1600x425",
    description: "Pens and pencils",
  },
  {
    admin: new ObjectID("614ff307cc06fd71f6943615"),
    name: "Groceries",
    coverImage: "https://source.unsplash.com/D6Tu_L3chLE/1600x425",
    description: "Fresh Groceries",
  },
  {
    admin: new ObjectID("614ff307cc06fd71f6943615"),
    name: "Services",
    coverImage: "https://source.unsplash.com/NfG4rXmceFM/1600x425",
    description: "Services",
  },
];
export default categories;
