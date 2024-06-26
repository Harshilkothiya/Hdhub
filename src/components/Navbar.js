import React from "react";
import"./Navbar.css"
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    
      <div className="navbar">
        <ul className="ul-list">
          <li className="lists"><Link to={"/"}>Home</Link></li>
          <li className="lists"><a href="Dual Audio">Dual Audio</a></li>
          <li className="lists"><a href="Bollywood">Bollywood</a></li>
          <li className="lists"><a href="Hollywood">Hollywood</a></li>
          <li className="lists"><a href="Hindi Movies">Hindi Movies</a></li>
          <li className="lists"><a href="Action">Action</a></li>
          <li className="lists"><a href="Web Series">Web Series</a></li>
          <li className="lists"><a href="Comedy">Comedy</a></li>
          <li className="lists"><a href="Thriller">How to Download</a></li>
        </ul>
      </div>
  );
}
