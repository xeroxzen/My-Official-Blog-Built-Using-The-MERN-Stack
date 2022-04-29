import React, { useState, useEffect } from "react";
import axios from "axios";
import PostsCard from "./PostsCard";

const UserPosts = () => {
  const [posts, setPosts] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => {
        console.log(err);
      });
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setPosts(data.posts.posts));
  }, []);
  console.log(posts);

  return (
    <div>
      {posts &&
        posts.map((post, index) => (
          <PostsCard
            key={index}
            title={post.title}
            content={post.content}
            description={post.description}
            image={post.image}
            author={post.user.name}
            publishedAt={post.createdAt}
          />
        ))}
    </div>
  );
};

export default UserPosts;
