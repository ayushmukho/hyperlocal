import bcrypt from "bcryptjs";
const users = [
  {
    username: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    username: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isSeller: true,
    shop: {
      name: "Hersheys",
    },
  },
  {
    username: "Mukho jod",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isSeller: true,
    shop: {
      name: "Iglis Izwaz",
    },
  },
  {
    username: "Khushi Yadav",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isSeller: true,
    shop: {
      name: "Broo",
    },
  },
  {
    username: "Sandeepan Das",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isSeller: true,
    shop: {
      name: "DSA",
    },
  },
  {
    username: "Shuhaib Bahu Ali",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isSeller: true,
    shop: {
      name: "Dese Bombs",
    },
  },
  {
    username: "Peedee",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isSeller: true,
    shop: {
      name: "Peedee kids shop",
    },
  },
  {
    username: "Nhk",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isSeller: true,
    shop: {
      name: "Your Adda",
    },
  },
  {
    username: "Anuj Kumar",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isSeller: true,
    shop: {
      name: "Shop n' Shine",
    },
  },
  {
    username: "Simran Saha",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isSeller: true,
    shop: {
      name: "Amazonian",
    },
  },
  {
    username: "Sonali jaiswal",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
    isSeller: true,
    shop: {
      name: "Shopify",
    },
  },
  {
    username: "Kiran Sharma",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    username: "Last User",
    email: "last@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
