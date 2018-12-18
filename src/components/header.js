import React from "react";

const Nav = () => {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
