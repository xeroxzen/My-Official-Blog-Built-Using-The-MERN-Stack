import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import postRouter from "./routes/blog-routes";

const app = express();

//middleware
app.use(express.json());

//import routers
app.use("/api/user", router);
app.use("/api/blog", postRouter);

const CONNECTION_URL =
  process.env.ATLAS_URI ||
  "mongodb+srv://admin:JBh1jbs6QQx7HIIR@myblog.dbi3o.mongodb.net/blog?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(
      PORT,
      () => console.log(`Server started on port ${PORT}`),
      console.log(`Server started on port ${PORT}`)
    )
  )
  .catch((err) => console.error(err));

//Connected tot MongoDB, yet?
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
