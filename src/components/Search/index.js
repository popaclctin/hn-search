import React from "react";
import "./index.css";
import logo from "../../img/logo-hn-search.webp";
import { Link } from "react-router-dom";

const Search = ({
  searchValue,
  handleInputChange,
  nbResults,
  fetchTime,
  ...rest
}) => {
  return (
    <header className="search">
      <div className="headerInput">
        <Link to="/">
          <img src={logo} alt="HN Search logo" />
        </Link>
        <Link to="/">
          <h1>Search Hacker News</h1>
        </Link>
        <input
          type="search"
          placeholder="Search stories by title, url or author"
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="searchOpt">
        <SearchOptions {...rest} />
        <div className="stats">
          {nbResults && formatNumber(nbResults)} results ({fetchTime} seconds)
        </div>
      </div>
    </header>
  );
};

const SearchOptions = ({ optSearch, optBy, optFor, handleSelectChange }) => {
  return (
    <div className="options">
      <label>
        Search
        <select
          name="optSearch"
          value={optSearch}
          onChange={handleSelectChange}
        >
          <option value="">All</option>
          <option value="story">Stories</option>
          <option value="comment">Comments</option>
        </select>
      </label>
      <label>
        by
        <select name="optBy" value={optBy} onChange={handleSelectChange}>
          <option value="search">Popularity</option>
          <option value="search_by_date">Date</option>
        </select>
      </label>
      <label>
        for
        <select name="optFor" value={optFor} onChange={handleSelectChange}>
          <option value="">All time</option>
          <option value="86400">Past 24h</option>
          <option value="604800">Past Week</option>
          <option value="2419200">Past Month</option>
          <option value="29030400">Past Year</option>
        </select>
      </label>
    </div>
  );
};

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default Search;
