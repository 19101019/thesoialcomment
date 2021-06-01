import React from "react";
import "./index.css";

const MobileFooterComponent = (props) => {
  return (
    <div className="container mobile-footer-wrapper d-sm-none">
      <div className="row">
        <div className="col-6">
          <a href="https://app.letsgtok.com/login" target="_blank" rel="noopener noreferrer" className="btn btn-violet-outline">
            Sign in
          </a>
        </div>
        <div className="col-6">
          <a href="https://app.letsgtok.com/signup" target="_blank" rel="noopener noreferrer" className="btn btn-violet">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileFooterComponent;
