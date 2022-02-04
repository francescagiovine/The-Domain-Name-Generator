/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#generator").addEventListener("click", () => {
    document.querySelector("#name").innerHTML = nameGenerator();
  });
};

let nameGenerator = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".net", ".org"];
  return (
    randomElement(pronoun) +
    randomElement(adj) +
    randomElement(noun) +
    randomElement(dom)
  );
};

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
