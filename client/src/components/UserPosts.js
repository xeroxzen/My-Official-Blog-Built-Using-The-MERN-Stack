import React, { useState, useEffect } from "react";
import axios from "axios";
import PostsCard from "./PostsCard";

const UserPosts = () => {
  const [user, setUser] = useState();
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
    sendRequest().then((data) => setUser(data.user));
  }, []);

  return (
    <div>
      {" "}
      {user &&
        user.posts &&
        user.posts.map((post, index) => (
          <PostsCard
            id={post._id}
            key={index}
            isUser={true}
            title={post.title}
            content={post.content}
            description={post.description}
            image={post.image}
            author={user.name}
            publishedAt={post.createdAt}
          />
        ))}
    </div>
  );
};

export default UserPosts;
