import React from "react";
import "./Navbar.css";
import Carousel from "../Carousel/CarouselComponent";

import { FiSearch, FiArrowRight } from "react-icons/fi";
import { HiBell } from "react-icons/hi";
import escapist from "./assets/escapist-image.png";
import fortnite from "./assets/fortnite-image.png";
import league from "./assets/league-image.png";
import long from "./assets/long-image.png";
import warhammer from "./assets/warhammer-image.png";
import yakuza from "./assets/yakuza-image.png";

const Navbar = () => {
  return (
    <div className="content">
      {/* Search Section */}
      <div className="search-section">
        <ul>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Browse</a>
          </li>
          <li>
            <a href="#">Wishlist</a>
          </li>
        </ul>
        <div className="search-section-right">
          <HiBell className="notification-icon icon" />
          <div className="search">
            <FiSearch className="search-icon icon" />
            <input class="input-field" type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      {/* End of Search Section */}
      {/* Media Section */}
      <div className="hero">
        <div className="main">
          <h3>Fortnite</h3>
          <div className="hero-text">
            <p>Update</p>
            <h3>
              The hunt is on in Fortnite Chapter 2 - <br />
              Season 5 : Zero Point.
            </h3>
            <button>
              Play for free <FiArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>
        <div className="list-items">
          <ul>
            <li>
              <img src={fortnite} alt="" />
              <p>Fornite</p>
            </li>
            <li>
              <img src={league} alt="" />
              <p>Rocket League</p>
            </li>
            <li>
              <img src={escapist} alt="" />
              <p>The Escapists 2</p>
            </li>
            <li>
              <img src={long} alt="" />
              <p>The Long Dark</p>
            </li>
            <li>
              <img src={yakuza} alt="" />
              <p>
                Yakuza:
                <br />
                Like a Dragon
              </p>
            </li>
            <li>
              <img src={warhammer} alt="" />
              <p>
                Warhammer:
                <br />
                Verminitide 2
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* End of Media Section */}
      <Carousel />
    </div>
  );
};

export default Navbar;
