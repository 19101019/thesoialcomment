import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = (props) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", getOffsetWindow)
  }, [])

  function getOffsetWindow() {
    setOffset(window.pageYOffset)
  }

  return (
    <nav className={`navbar navbar-expand-lg ${offset > 200 ? "fixed-top sticky-after" : "fixed-top"}`}>
      <div className="container py-2 px-4">
        <Link to="/" className="navbar-brand">
        	Lets Gtok
        </Link>
        <button className="navbar-toggler custom-toggler btn" data-toggle="collapse" data-target="#CollapseNavbar" aria-controls="CollapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="CollapseNavbar">
          <ul className='navbar-nav ml-auto text-center'>
            <li className='nav-item px-sm-2' title='Campaigns'>
              <Link to='/' className="nav-link" onClick={e => alert("Coming soon!")}>
                Carnival
              </Link>
            </li>
            <li className='nav-item px-sm-2' title='Blogs'>
              <Link to='/' className="nav-link" onClick={e => alert("Coming soon!")}>
                Blogs
              </Link>
            </li>
            <li className='nav-item px-sm-2' title='Careers'>
              <Link to='/careers' className="nav-link">
                Careers
              </Link>
            </li>
            <li className='nav-item px-sm-2' title='Contact'>
              <Link to='/' className="nav-link" onClick={e => alert("Drop a email at letsgtok@gmail.com")}>
                Contact
              </Link>
            </li>
            <li className={`nav-item px-sm-3 ${offset > 200 ? "join-btn" : "join-btn d-sm-none"}`} title='Join in'>
              <a href="https://app.letsgtok.com" target="_blank" rel="noopener noreferrer" className="btn btn-violet">
                Join in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
