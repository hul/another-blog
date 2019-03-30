import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navigation = () => (
  <header>
    <h1>Kolejny Blog</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Start</Link>
        </li>
        <li>
          <Link to="/posts">Posty</Link>
        </li>
        <li>
          <Link to="/posts/new">
            Dodaj nowy post
            {' '}
            <FontAwesomeIcon icon="plus" />{" "}
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
