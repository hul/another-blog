import React from "react";
import { Link } from "react-router-dom";

export const PostsList = ({ match, posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
        {' '}
        <Link to={`/posts/${post.id}/edit`}>Edytuj</Link>
      </li>
    ))}
  </ul>
);
