import { showCards } from "./modules/showCards.js";
import toggleLoader from "./modules/loader.js";

const loaderEle = document.querySelector(".loader");
const cardContainer = document.querySelector(".meal-cards-container");

let favouriteMeal = {};
if (
  localStorage.getItem("favouriteMeal") !== "undefined" &&
  localStorage.getItem("favouriteMeal") !== null
) {
  favouriteMeal = JSON.parse(localStorage.getItem("favouriteMeal"));
}

await toggleLoader(loaderEle, cardContainer, true, "inline-block");
await showCards();
await toggleLoader(loaderEle, cardContainer, false, "block");
