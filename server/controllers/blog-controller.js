import Blog from "../models/Blog";
import User from "../models/User";
import mongoose from "mongoose";

export const getAllPosts = async (req, res, next) => {
  let posts;
  try {
    posts = await Blog.find().populate("user");
  } catch (err) {
    return console.error(err);
  }
  if (!posts) {
    return res.status(404).json({ message: "Posts not found" });
  }
  return res.status(200).json({ posts });
};

export const createPost = async (req, res, next) => {
  const { title, content, description, image, user } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "User does not exist" });
  }
  const post = new Blog({ title, content, description, image, user });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await post.save();
    existingUser.posts.push(post);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
  return res.status(200).json({ post });
};

export const updatePost = async (req, res, next) => {
  const { title, content, description, image, user } = req.body;
  let updatedPost;
  try {
    updatedPost = await Blog.findByIdAndUpdate(req.params.id, {
      title,
      content,
      description,
      image,
      user,
    });
  } catch (err) {
    return console.error(err);
  }
  if (!updatedPost) {
    return res.status(404).json({ message: "Post not found" });
  }
  if (!updatedPost) {
    return res.status(500).json({ message: "Post not updated" });
  }
  return res.status(200).json({ updatedPost });
};

export const getById = async (req, res, next) => {
  let post;
  try {
    post = await Blog.findById(req.params.id);
  } catch (err) {
    return console.error(err);
  }
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  return res.status(200).json({ post });
};

export const deletePost = async (req, res, next) => {
  let deletedPost;
  try {
    deletedPost = await Blog.findByIdAndDelete(req.params.id).populate("user");
    await deletedPost.user.posts.pull(deletedPost);
    await deletedPost.user.save();
  } catch (err) {
    return console.error(err);
  }
  if (!deletedPost) {
    return res.status(404).json({ message: "Post not found" });
  }
  return res.status(200).json({ message: "Post deleted" });
};

export const getByUserId = async (req, res, next) => {
  const userId = req.params.id;
  let userPosts;
  try {
    userPosts = await User.findById(userId).populate("posts");
  } catch (err) {
    return console.error(err);
  }
  if (!userPosts) {
    return res.status(404).json({ message: "Posts not found" });
  }
  return res.status(200).json({ user: userPosts });
};
