import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="city-search-form">
        <div className="d-flex">
          <div className="col-6 mb-2">
            <div className="input-group rounded city-search">
              <input
                type="search"
                className="form-control"
                placeholder="Search city"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-start-0 rounded-start search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
          <div className="col-6 ms-4">
            <button
              className="btn px-3 py-2 align-items-center location-btn"
              type="button"
            >
              <i className="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
