import React from "react";

// images
import Logo from '../assets/logo.svg'

const Header = () => {
  return <div className="py-8">
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        {/* logo */}
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <button className="btn btn-sm">
          Work with me
        </button>
      </div>
    </div>
    </div>;
};

export default Header;
