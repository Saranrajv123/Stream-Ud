import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div>
      <ul className="nav nav-justified nav-pills">
        <li className="nav-item">
          <Link to="/" className="nav-link">
          <button className='btn btn-sm btn-primary'>
              Streamer 
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <button className='btn btn-sm btn-primary'>
              All Streamer
            </button>
          </Link>
        </li>
        <li className='nav-item'>
          <GoogleAuth className='nav-link' />
        </li>
      </ul>
    </div>
  );
};

export default Header;
