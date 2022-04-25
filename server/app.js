import express from "express";
import mongoose from "mongoose";

const app = express();

//middleware
app.use(express.json());

app.use("/api", (req, res, next) => {
  res.send("Hello World");
});

//mongoose connection
const port = process.env.PORT;
mongoose
  .connect(
    "mongodb+srv://admin:JBh1jbs6QQx7HIIR@myblog.dbi3o.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(port))
  .then(() => console.log(`Server started on port ${port}`))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
