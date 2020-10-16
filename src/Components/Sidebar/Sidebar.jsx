import React from 'react'
import $ from 'jquery';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    $(window).on("scroll", () => {
        if ($(window).scrollTop() > 10) {
          $(".sidebar").addClass("scrolledSidebar");
        } else {
          $(".sidebar").removeClass("scrolledSidebar");
        }
      });
    return (
        <div className="sidebar - flex">
            <nav className="sideNav">
                <div className="sideNav__section">
                    <div className="sideNav__section__title">
                        Category
                    </div>
                    <div className="sideNavLinks - flex column ">
                        <Link to="/" className="sideNavLink - flex f-ai-c">Robotics & Automation</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">Web Development</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">App Development</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">Film & Animation</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">Graphics Designing</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">Programming Language</Link>
                    </div>
                </div>
                <div className="sideNav__section">
                    <div className="sideNav__section__title">
                        Price
                    </div>
                    <div className="sideNavLinks - flex f-ai-c">
                        <Link to="/" className="sideNavLink - flex f-ai-c">All</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">Free</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">Paid</Link>
                    </div>
                </div>
                <div className="sideNav__section">
                    <div className="sideNav__section__title">
                        Year
                    </div>
                    <div className="sideNavLinks - flex column ">
                        <Link to="/" className="sideNavLink - flex f-ai-c">2020</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">2019</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">2018</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">2017</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">2016</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">2015</Link>
                        <Link to="/" className="sideNavLink - flex f-ai-c">Older</Link>
                    </div>
                </div>
            </nav>
            <div className="separator"></div>
        </div>
    )
}

export default Sidebar
