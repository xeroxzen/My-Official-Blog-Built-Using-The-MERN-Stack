import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true }, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

  //   comments: { type: Schema.Types.ObjectId, ref: "Comment" },
});

export default mongoose.model("Posts", blogSchema);
