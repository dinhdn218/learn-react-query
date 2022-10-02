import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const RQPosts = () => {
  const fetchPosts = async () => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return posts.data;
  };

  const {
    data: posts,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery(["posts"], fetchPosts, {
    retry: false,
    staleTime: 30000,
  });

  console.log(isLoading, isFetching);

  if (isLoading) return <>Loading...</>;

  if (isError) return <>Error: {error.message}</>;

  return (
    <>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
};

export default RQPosts;
