import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand"  href="#">
          <h4><b>News</b><span class="badge bg-danger">Today</span></h4>
          </a>
        </div>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <a className="nav-link active" style={{fontSize:"20px", color: "black"}} aria-current="page" href="/home">
                <b>General</b>
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link active" style={{fontSize:"20px", color: "black"}}  aria-current="page" href="/sports">
                <b>Sports</b>
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link active" style={{fontSize:"20px", color: "black"}}  aria-current="page" href="/climate">
                <b>Climate</b>
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link active" style={{fontSize:"20px", color: "black"}}  aria-current="page" href="/science">
                <b>Science</b>
                </a>
              </li>
              
            </ul>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
