import User from "../models/User";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    return console.error(err);
  }
  if (!users) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({ name, email, password: hashedPassword });

  try {
    await user.save();
  } catch (err) {
    return console.log(err);
  }

  return res.status(201).json({ user }); //201 => user is created
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User does not exist" });
  }
  const isValidPassword = bcrypt.compareSync(password, existingUser.password);
  if (!isValidPassword) {
    return res.status(400).json({ message: "Invalid password" });
  }
  return res.status(200).json({ message: "Login successful" });
};
