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
    username: "Jane Doe",
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
