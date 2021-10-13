import React from "react";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../../images/logo.png";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { Button } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";

import "react-toastify/dist/ReactToastify.css";

import useStyles from "./styles";
import { LOGOUT } from "../../../constants/actionTypes";

import SignUp from "../../authentication/SignUp/SignUp";
import SignIn from "../../authentication/SignIn/SignIn";

const Nav = styled.nav`
  background: none;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: black;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);

  const handleOpen = () => {
    setOpenSignUp(true);
  };

  const handleClose = () => {
    setOpenSignUp(false);
  };

  const handleOpenSignIn = () => {
    setOpenSignIn(true);
  };

  const handleCloseSignIn = () => {
    setOpenSignIn(false);
  };

  const sellersData = useSelector((state) => state.user);
  const { isLoading, authData } = sellersData;

  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    setAnchorEl(null);
  };

  return (
    <>
      <Nav position="static">
        <NavLink to="/" className={classes.logo_name}>
          <h1>
            <span className="font-link">Trevio</span>
          </h1>
          <img src={logo} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </NavMenu>
        {!isLoading ? (
          <div className={classes.flex}>
            <h3>{authData.username}</h3>
            <Avatar src={authData.avatar} onClick={handleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              {authData.isSeller ? (
                <MenuItem onClick={handleClose}>My Products</MenuItem>
              ) : (
                <MenuItem onClick={handleClose}>Be a Seller</MenuItem>
              )}
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
           <div className={classes.buttonDiv}>
            <Button onClick={handleOpen} className={classes.but}>
              Sign Up
            </Button>

            <SignUp
              openSignUp={openSignUp}
              setOpenSignUp={setOpenSignUp}
              Close={handleClose}
            />
            <Button onClick={handleOpenSignIn} className={classes.but1}>
              Sign In
            </Button>
            <SignIn
              openSignIn={openSignIn}
              setOpenSignUp={setOpenSignIn}
              closeSignIn={handleCloseSignIn}
            />
            </div>
          
        )}
      </Nav>
    </>
  );
};

export default Navbar;
