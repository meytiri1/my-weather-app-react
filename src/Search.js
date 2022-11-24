import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="city-search-form">
        <div className="d-flex">
          <div className="col-6 me-sm-auto ms-md-2 ms-lg-2 me-auto me-sm-3 ms-xxl-2 me-xxl-5 mb-2">
            <div className="input-group rounded city-search">
              <input
                type="search"
                className="form-control"
                placeholder="Search city"
                aria-label="Search"
                aria-describedby="search-addon"
                autocomplete="off"
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
              <i class="fa-solid fa-location-dot"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
