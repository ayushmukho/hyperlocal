import mongoose from "mongoose";
const { mongo } = mongoose;
const ObjectID = mongo.ObjectId;
const categories = [
  {
    admin: new ObjectID("614ff307cc06fd71f6943615"),
    name: "Electronics",
    image: "/images/airpods.jpg",
    description: "Electronics applicances",
  },
];
export default categories;
