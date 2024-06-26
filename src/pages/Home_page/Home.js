import React from "react";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import Logo from "../../components/logo";
import "./Home.css";
import SimpleSlider from "../../components/Slider";
import PaginationComponent from "../../components/Pagination";

import { Link } from "react-router-dom";

export default function home() {
  return (
    <div>
      <Link to="/">
        <div className="nav">
          <Logo />
          <Navbar />
        </div>
        <div className="search">
          <Search />
        </div>
        <div>
          <SimpleSlider />
        </div>
      </Link>
      <div className="pagination">
        <PaginationComponent />
      </div>
    </div>
  );
}
