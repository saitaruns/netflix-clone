import React from "react";
import { FaBell, FaCaretDown } from "react-icons/fa";
import NetflixLogo from "./../assets/NetflixLogo.png";
import Search from "./Search";

const Navbar = () => {
  const navColor = () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 10) {
      nav.classList.add("black");
    } else {
      nav.classList.remove("black");
    }
  };
  window.addEventListener("scroll", navColor);
  return (
    <nav className="navbar">
      <ul className="home-ul home-nav-one">
        <li>
          <a className="navbar-brand" href="/">
            <img src={NetflixLogo} width="90" className="" alt="React Logo" />
          </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">TV shows</a>
        </li>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/">{`News & Popular`}</a>
        </li>
        <li>
          <a href="/">MyList</a>
        </li>
      </ul>
      <ul className="home-ul home-nav-two">
        <li>
          <Search />
        </li>
        <li>Kids</li>
        <li>DVD</li>
        <li>
          <FaBell />
        </li>
        <li>
          <div className="profile">
            <img src="https://source.unsplash.com/30x30/" alt="profile-pic" />
            <FaCaretDown />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
