import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

export const Post = ({ post, match }) => {
  return post
    ? (
    <section>
      <header>
        <h2>{ post.id } { post.title }{' '}<Link to={`${match.url}/edit`}>Edytuj</Link>
        </h2>
      </header>
      <p>{ post.text }</p>
    </section>
  ) : <Redirect to="/not-found" />;
};
