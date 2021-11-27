import React from "react";
import { image } from "../data/data";

function About() {
  return (
    // create a div element with an id of "about"
    <div id="about">
      {/* create an <h2> element with the content of "About Me" */}
      <h2>
        About Me
      </h2>
      {/* create a <p> element with tany content of your choosing */}
      <p>
        I'm a web developer currently enrolled in Flatiron School
      </p>
      {/* create an <img> element with the src attribute set to the image variable and the alt attribute set to "I made this" */}
      <img
      src={image}
      alt="I made this"
      />
    </div>
  );
}

export default About;
