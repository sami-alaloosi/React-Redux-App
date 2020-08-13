/** @format */

import React from "react";

import { useSelector } from "react-redux";

const Loadding = () => {
  const isFetchiong = useSelector((state) => state.isFetchiong);
  
  return (
    <div className={isFetchiong ? "show" : "noShow"}>
      <div className="loadding">
        <div className="inside">
          <div className="loader"></div>
        </div>
      </div>

      <h2>Loading</h2>
    </div>
  );
};

export default Loadding;
