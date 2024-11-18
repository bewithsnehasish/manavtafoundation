import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const Navbar = ({
  profile,
  handleLogout,
  loading,
  handleCartClick,
  cartLoading,
}) => {
  const getActiveClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        {/* Navbar Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            src="list.png"
            alt="..."
            style={{ width: "30px", height: "40px" }}
          />
        </button>

        {/* Centered Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <nav class="navbar">
            <a href="index.html">HOME</a>
            <a href="about.html">ABOUT</a>
            <a href="services.html">SERVICES</a>
            <a href="">PORTFOLIO</a>
            <a href="">OUR WORK</a>
            <a href="index (5).html">SHOP</a>
            <a href="blogs.html">NEWS</a>
            <a href="contact.html">CONTACT US</a>
            {/* <div class="buttons">
              <button class="buttons">🛒</button>
              <button class="buttons">❤️</button>
            </div> */}
          </nav>
        </div>

        {/* Right-aligned profile and cart section */}
        <div className="d-flex ml-auto">
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : profile ? (
            <>
              <NavLink className="nav-link" to="/profile">
                <span className="navbar-text text-dark me-3">
                  Welcome, {profile.fullname}
                </span>
              </NavLink>
              <button
                style={{ width: "70px", height: "60px" }}
                className="btn btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/user">
                <button className="btn btn-success me-2">SignIn</button>
              </NavLink>
            </>
          )}
          <NavLink
            style={{ width: "60px", height: "50px" }}
            to="/addtocart"
            className="buttons"
            onClick={handleCartClick}
            disabled={cartLoading}
          >
            {cartLoading ? (
              <div
                className="spinner-border spinner-border-sm text-dark"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span>Cart </span>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
