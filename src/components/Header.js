import React from "react";
import { NavLink } from "react-router-dom";

import SearchIcon from "./Icon";
import "../StyleSheet/header.css";

function Header({ filterProducts }) {
  let navList = [
    {
      id: 1, title: "Mobile Phones", path: "MobilePhones", category
        :
        "mobile"
    },
    {
      id: 2, title: "Cars", path: "Cars", category
        :
        "Cars"
    },
    {
      id: 3, title: "Motorbikes", path: "Motorbikes", category
        :
        "Bikes"
    },
    {
      id: 4, title: "Electronics", path: "TV-Video-Audio", category
        :
        "electronics"
    },
    {
      id: 5, title: "Tablets ", path: "Tablets", category
        :
        "mobile"
    },
    {
      id: 6, title: "Land and plots", path: "LandandPlots", category
        :
        "LandandPlots"
    },
  ];

  return (
    <div className="main-header">
      <div className="navbar">
        <div className="logo header_left">
          <svg
            width="48px"
            height="39px"
            viewBox="0 0 1024 1024"
            data-aut-id="icon"
            fillRule="evenodd"
          >
            <path
              className="rui-77aaa"
              d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
            />
          </svg>
        </div>
        <div className="select_location_container ">
          <div className="search_icon ">
            <SearchIcon />
          </div>
          <select name="" id="select-location-input">
            <option value="">Punjab</option>
            <option value="">Faisalabad</option>
            <option value="" className="sub_options">
              Lahore
            </option>
            <option value="" className="sub_options">
              Islamabad
            </option>
          </select>
        </div>
        <div className="main_search_bar">
          <input
            type="text"
            placeholder="Find Cars, Mobile phones and more ..."
            className="main-search-input"
          />
          <button className="search-button">
            <SearchIcon />
          </button>
        </div>
        <div className="buttons">
          <NavLink to="/Login">
            <button className="login_btn">Login</button>
          </NavLink>
          <NavLink to="/AddProduct">
            <button className="selling_btn">+Sell</button>
          </NavLink>
        </div>
      </div>
      <div className="navMenu">
        <div className="cates">
          <select name="" id="select-category">
            <option value="">ALL CATEGORIES</option>
            <option value="">Mobile Phones</option>
            <option value="" className="sub_options">
              Motorbikes
            </option>
            <option value="" className="sub_options">
              TV-Video-Audio
            </option>
          </select>
          <div className="menuItems">
            <span style={{ margin: "0 10px" }} onClick={() => filterProducts(() => true)}>
              All
            </span>
            {navList.map((item) => {
              return (
                <span style={{ margin: "0 10px" }} key={item.id} to={item.path} onClick={() => filterProducts(product => product.category == item.category)}>
                  {item.title}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
