import React from "react";
import "./navbar.css";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const hamb = useRef("");
  const icon = useRef("");

  const ic = useRef("");
  useEffect(() => {
    hamb.current = document.querySelector(".hamburger-navbar");
    icon.current = document.querySelector(".hamb-icon");
    ic.current = document.querySelector(".ni");

    ic.current.addEventListener("click", () => {
      hamb.current.classList.remove("display-block");
    });

    icon.current.addEventListener("click", () => {
      hamb.current.classList.add("display-block");
    });
  });

  return (
    <div className="navbar" id="navbar">
      <div className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-logo">
            <img
              src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/food-store-logo.png"
              alt=""
            />
          </div>{" "}
          <div className="navbar-list">
            <ul>
              <li to="/r3" className="navbar-li-link">
                <a href="#">HOME</a>
              </li>
              <li to="/r3" className="navbar-li-link">
                <a href="#menu">MENU</a>
              </li>
              <li to="/r3" className="navbar-li-link">
                <a href="#listing">SHOP</a>
              </li>
              <li to="/r3" className="navbar-li-link">
                <a href="#product">PAGES</a>
              </li>
              <li to="/r3" className="navbar-li-link">
                <a href="#sales">OUR BLOG</a>
              </li>
              <li to="/r3" className="navbar-li-link">
                <a href="#contact">CONTACT</a>
              </li>
              <li className="dis-none">
                <a href="/r3" className="">
                  <GiHamburgerMenu className="hamb-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-icons">
            <BsCart2 className="nav-i" />
            <Link to="/r6">
              <AiOutlineSearch className="nav-i" />
            </Link>
          </div>
          <div className="navbar-image">
            <img
              src="https://divifoodstore.divifixer.com/wp-content/uploads/2020/10/divi-scooter-left.png"
              alt=""
            />
            <div className="navbar-image-text">
              <p>CALL AND ORDER IN</p>
              <h3>+1 234-567-89</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-smooth">
        <a href="#navbar">
          <AiOutlineArrowUp />{" "}
        </a>
      </div>
      <div className="hamburger-navbar">
        <ul>
          <li>
            <a href="/r6" className="hn-a">
              Home
            </a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#listing">Shop</a>
          </li>
          <li>
            <a href="#product">Pages</a>
          </li>
        </ul>
        <p>
          <AiOutlineArrowUp className="ni" />
        </p>
      </div>
    </div>
  );
};

/*
 */

export default Navbar;

//
