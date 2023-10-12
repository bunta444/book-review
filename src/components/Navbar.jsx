import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success-subtle fixed-top ">
      <div className="container">
        <a className="navbar-brand" href="/">
          Book Review
        </a>
        <div className="d-flex">
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
