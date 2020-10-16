import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { FiSearch } from "react-icons/fi";
const Header = () => {
  $(window).on("scroll", () => {
    if ($(window).scrollTop() > 10) {
      $("header.mainHeader").addClass("scrolledHeader");
    } else {
      $("header.mainHeader").removeClass("scrolledHeader");
    }
  });
  return (
    <header className="mainHeader">
      <div className="headerContent - flex f-ai-c f-jc-sb">
        <div className="headerContent__left - flex f-ai-bl">
          <div className="hcl__brandPageIndicator - flex f-ai-bl">
            <Link to="/" className="brandLink">
              <p className="brandName">Eleqtrasoft</p>
            </Link>
            <div className="pageIndicator">
              <p className="pageName">Courses</p>
            </div>
          </div>
          <nav className="hcl__nav">
            <Link to="/" className="hcl__nav__navLinks active">
              Courses
            </Link>
            <Link to="/" className="hcl__nav__navLinks">
              Library
            </Link>
            <Link to="/" className="hcl__nav__navLinks">
              Pricing
            </Link>
            <Link to="/" className="hcl__nav__navLinks">
              Services
            </Link>
          </nav>
        </div>
        <div className="headerContent__right - flex f-ai-c">
          <div className="hcr__searchBar - flex f-pc">
            <input
              type="text"
              className="hcr__searchInput"
              placeholder="Search courses, resources, etc."
            />
            <div className="searchIconCont - flex f-pc">
              <FiSearch className="searchIcon" />
            </div>
          </div>
          <div className="hcr__accountSession">
            <Link to="/" className="loginLink">
              Login
            </Link>
            <Link to="/" className="signupLink">
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
