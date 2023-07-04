import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/logs">LOG</a></li>
            <li><a href="/workouts">WORKOUTS</a></li>
            <li><a href="/reports">REPORTS</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;