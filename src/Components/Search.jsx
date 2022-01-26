import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./../styles/search.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const handleClick = (e) => {
      document
        .querySelector(".search-bar")
        .classList.toggle("search-bar-active");
      document
        .querySelector(".search-input")
        .classList.toggle("search-input-active");
  };
  

  return (
    <div className="search-bar">
      <div onClick={(e) => handleClick(e)} className="search-icon">
        <FaSearch />
      </div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        className="search-input"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
