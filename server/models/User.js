import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  posts: [{ type: mongoose.Types.ObjectId, ref: "Posts", required: true }],
});

export default mongoose.model("User", userSchema);

//will be stored inn mongoDB as a collection called 'users'
