import React from "react";
import { Link } from "react-router-dom";

export const Post = ({ match, post }) => (
  <section>
    <header>
      <h2>{ post.id } { post.title }</h2>
      <Link to={`${match.url}/edit`}>Edytuj</Link>
    </header>
    <p>{ post.text }</p>
  </section>
);
