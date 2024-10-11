import React from "react";
import { HashLoader } from "react-spinners";
import './loader.css'

const Loader = () => {
  return (
    <div className="loader">
      <HashLoader color="#ffd600" loading size={70} speedMultiplier={1.5} />
    </div>
  );
};

export default Loader;
