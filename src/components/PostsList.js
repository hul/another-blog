import React from "react";
import { Link } from "react-router-dom";

export const PostsList = ({ match, posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}><Link to={`${match.url}/${post.id}`}>{post.title}</Link></li>
    ))}
  </ul>
);
