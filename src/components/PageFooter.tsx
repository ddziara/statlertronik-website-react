import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <footer className="page-footer">
      <div className="footer-licence-info">
        <em>
          The Android robot is reproduced or modified from work created and
          shared by Google and used according to terms described in the Creative
          Commons 3.0 Attribution License.
          <br />
          Android is a trademark of Google Inc.
        </em>
      </div>
      <div className="footer-links">
        <NavLink to="/privacypolicy" className="footer-link">Privacy Policy</NavLink>
      </div>
    </footer>
  );
};
