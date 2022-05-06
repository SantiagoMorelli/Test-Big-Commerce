import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Product List Simple Edition</Link>
        </li>
        <li>
          <Link to="/bulk">Product List Bulk Edition</Link>
        </li>
      </ul>
    </nav>
  );
}
