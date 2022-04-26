import express from "express";
import {
  getAllPosts,
  createPost,
  updatePost,
  getById,
  deletePost,
  getByUserId,
} from "../controllers/blog-controller";

const postRouter = express.Router();

postRouter.get("/", getAllPosts);
postRouter.post("/create", createPost);
postRouter.put("/update/:id", updatePost);
postRouter.get("/:id", getById);
postRouter.delete("/:id", deletePost);
postRouter.get("/user/:id", getByUserId);

export default postRouter;
