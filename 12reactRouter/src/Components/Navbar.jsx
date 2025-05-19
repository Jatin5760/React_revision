import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const navigate = useNavigate();

  const login = () => {
    setisLoggedIn(true);
    navigate("./dashboard");
  };

  const logout = () => {
    setisLoggedIn(false);
  };

  return (
    <>
      <div className="nav_bar">
        <Link
          to={"/"}
          className="left-items"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          WDM{" "}
        </Link>

        <div className="right">
          {isLoggedIn && (
            <>
              <Link className="items" to={"/about"}>
                About
              </Link>
              <Link className="items" to={"/courses"}>
                Courses
              </Link>
              <Link className="items" to={"/dashboard"}>
                Dashboard
              </Link>
              <Link className="items" to={"/profile"}>
                Profile
              </Link>
              <Link className="items" to={"/team"}>
                Team
              </Link>
              <Link className="items" to={"/contact"}>
                Contact
              </Link>

              <Link
              onClick={logout}
                className="items"
                style={{ fontWeight: "bold", backgroundColor: "gray" }}
              >
                Logout
              </Link>
            </>
          )}

          {!isLoggedIn && (
            <>
              <Link className="items" to={"/about"}>
                About
              </Link>

              <Link className="items" to={"/team"}>
                Team
              </Link>

              <Link className="items" to={"/contact"}>
                Contact
              </Link>

              <Link
                onClick={login}
                className="items"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "gray",
                  marginRight: "10px",
                }}
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
