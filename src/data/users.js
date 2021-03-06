import bcrypt from "bcryptjs";
const users = [
  {
    username: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    username: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
    shop: {
      name: 'Hersheys',
      icon: 'https://static.vecteezy.com/system/resources/previews/003/283/940/original/stationary-pencil-case-illustration-free-vector.jpg',
    },
  },
  {
    username: 'Mukho jod',
    email: 'randi@example.com',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
    shop: {
      name: 'Iglis Izwaz',
    },
  },
  {
    username: 'Khushi Yadav',
    email: 'khus@example.com',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
    shop: {
      name: 'Broo',
    },
  },
  {
    username: 'Sandeepan Das',
    email: 'sand@example.com',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
    shop: {
      name: 'DSA',
      icon: 'https://static.vecteezy.com/system/resources/previews/003/283/940/original/stationary-pencil-case-illustration-free-vector.jpg',
    },
  },
  {
    username: 'Shuhaib Bahu Ali',
    email: 'shu@example.com',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
    shop: {
      name: 'Dese Bombs',
    },
  },
  {
    username: 'Peedee',
    email: 'pede@example.com',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
    shop: {
      name: 'Peedee kids shop',
    },
  },
  {
    username: 'Nhk',
    email: 'nhk@example.com',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
    shop: {
      name: 'Your Adda',
    },
  },
  {
    username: 'Anuj Kumar',
    email: 'anu@example.com',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
    shop: {
      name: "Shop n' Shine",
    },
  },
  {
    username: 'Simran Saha',
    email: 'simran@example.com',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
    shop: {
      name: 'Amazonian',
    },
  },
  {
    username: 'Sonali jaiswal',
    email: 'sonali@example.com',
    password: bcrypt.hashSync('123456', 10),
    isSeller: true,
    shop: {
      name: 'Shopify',
    },
  },
  {
    username: 'Kiran Sharma',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    username: 'Last User',
    email: 'last@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users;
