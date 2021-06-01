import React from "react";
import { Link } from 'react-router-dom';

const FooterComponent = (props) => {
  return (
    <div className="container footer-wrapper">
      <div className="my-4">
        <a href="https://www.facebook.com/letsgtok" target="_blank" rel="noopener noreferrer" className="small px-3 px-sm-5">
          <img className="" src={require("assets/svgs/logo_facebook.svg").default} alt="1" />
        </a>
        <a href="https://www.instagram.com/letsgtok" target="_blank" rel="noopener noreferrer" className="small px-3 px-sm-5">
          <img className="" src={require("assets/svgs/logo_instagram.svg").default} alt="1" />
        </a>
        <a href="https://www.youtube.com/channel/UCimnYWrV3fkqL2hz0-oQ61Q" target="_blank" rel="noopener noreferrer" className="small px-3 px-sm-5">
          <img className="" src={require("assets/svgs/logo_youtube.svg").default} alt="1" />
        </a>
      </div>
      <div className="row my-4 options">
        <Link to="/" className="col-12 col-sm-3 small px-5" onClick={e => alert("Coming soon")}>
          Help centre
        </Link>
        <Link to="/tnc" className="col-12 col-sm-3 small px-5">
          Terms and conditions
        </Link>
        <Link to="/" className="col-12 col-sm-3 small px-5" onClick={e => alert("Coming soon")}>
          FAQ
        </Link>
        <Link to="/privacy_policy" className="col-12 col-sm-3 small px-5">
          Privacy policy
        </Link>
      </div>
      <div className="small">
        <small>Lets Gtok Limited &#174;</small>
      </div>
    </div>
  );
};

export default FooterComponent;
