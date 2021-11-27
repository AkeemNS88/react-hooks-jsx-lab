import React from "react";


function NavBar() {
  return (
    <nav>
      {/* create an <a> element with the href attribute set to #home, and the content of "Home" */}
      <a 
        href={"#home"}>
        Home
      </a>
      {/* create an <a> element, with the href attribute set to #about, and the content of "About" */}
      <a
        href={"#about"}>
        About
      </a>
    </nav>
  );
}

export default NavBar;
