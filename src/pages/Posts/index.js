import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const posts = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setIsLoading(false);
      setPosts(posts.data);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) return <>Loading...</>;

  if (error) return <>Error: {error}</>;

  return (
    <>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
};

export default Posts;
