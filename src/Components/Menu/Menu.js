import React from "react";
import "./Menu.css";

import logo from "./assets/logo-image.png";
import profile from "./assets/profile-image.png";

import { FiSettings, FiDownload } from "react-icons/fi";
import { AiFillHome, AiFillFire, AiFillAppstore } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";

const Menu = () => {
  return (
    <div className="menu">
      <div className="border"></div>
      <div className="logo">
        <img src={logo} alt="" />
        <h3>GamesMode</h3>
      </div>
      <div className="nav">
        <ul>
          <li>
            <a href="#">
              <AiFillHome className="home-icon icon" />
              Home
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillFire className="store-icon icon" />
              Store
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillAppstore className="library-icon icon" />
              Library
            </a>
          </li>
          <li>
            <a href="#">
              <FaUserFriends className="friends-icon icon" />
              Friends
            </a>
          </li>
          <li>
            <a href="#">
              <HiStatusOnline className="live-icon icon" />
              Live
            </a>
          </li>
        </ul>
      </div>
      <div className="settings">
        <ul>
          <li>
            <a href="#">
              <FiDownload className="downloads-icon icon" />
              Downloads
            </a>
          </li>
          <li>
            <a href="#">
              <FiSettings className="settings-icon icon" />
              Settings
            </a>
          </li>
          <li>
            <a href="#">
              <img className="icon" src={profile} alt="" />
              John Doe
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
