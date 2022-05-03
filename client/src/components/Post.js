import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState();
  const id = useParams().id;
  console.log(id);

  const fetchPost = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    fetchPost().then((data) => setPost(data.post));
  }, [id]);
  console.log(post);

  return <div>Post</div>;
};

export default Post;
