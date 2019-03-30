import React from "react";

export const PostsList = ({ match, posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);
