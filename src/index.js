import React from "react";
import { createRoot } from "react-dom/client";

const colors = [
  "red", "blue", "green", "yellow", "orange", "purple",
  "pink", "brown", "gray", "tomato", "seagreen", "deeppink"
];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

const name = "Ezekiel Alden Christiano";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1 style={{ color: randomColor() }}>Hello World</h1>
    <p style={{ color: randomColor() }}>My Name is {name}</p>
    <p style={{ color: randomColor() }}>I am a handsome/pretty human being</p>
    <p style={{ color: randomColor() }}>I love to learn JavaScript</p>
    <p style={{ color: randomColor() }}>I am a super high quality student</p>
    <p style={{ color: randomColor() }}>I am going to be a super star</p>
  </div>
);