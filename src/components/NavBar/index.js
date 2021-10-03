import React from "react";
import { Link } from "react-router-dom";

export const NavBar = Object.assign(({ children }) => <ul>{children}</ul>, {
  Item: ({ path, title }) => (
    <li>
      <Link to={path} aria-label={title}>
        {title}
      </Link>
    </li>
  ),
});
