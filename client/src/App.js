import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Posts from "./components/Posts";
import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import UserPosts from "./components/UserPosts";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/my-posts" element={<UserPosts />} />
          <Route path="/my-post/:id" element={<Post />} />
          <Route path="/post/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
