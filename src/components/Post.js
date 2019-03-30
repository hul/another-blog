import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Post = ({ match, post }) => (
  <section>
    <header>
      <h2>{ post.id } { post.title }</h2>
      <Link to={`${match.url}/edit`}>Edytuj{' '}<FontAwesomeIcon icon="edit"/></Link>
    </header>
    <p>{ post.text }</p>
  </section>
);
