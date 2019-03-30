import React from "react";

export const Post = ({ post }) => (
  <section>
    <header>
      <h2>{ post.id } { post.title }</h2>
    </header>
    <p>{ post.text }</p>
  </section>
);
