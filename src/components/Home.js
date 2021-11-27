import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
  // create a div element with an id of "home" that has one <h1> child element with styling set to firebrick along with
  // content of "Your Name is a Web Developer from Your City"
  // must use JSX expression syntax to use imported name and city variables 
    <div id="home">
      <h1 style={{color: "firebrick"}}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
