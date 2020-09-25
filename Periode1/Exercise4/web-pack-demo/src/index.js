import _ from "lodash";
//import "./style.css";
//import Icon from "./fantomet.jpg";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello this is changed.", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  //   const myIcon = new Image();
  //   myIcon.src = Icon;

  //   element.appendChild(myIcon);
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("Accepting the updated printMe module!");
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  });
}
