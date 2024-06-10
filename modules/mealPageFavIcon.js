// ############## add to fav heart icon functionality ##########

import updateFavouriteMeal from "./updateFavouriteMeal.js";

const headingEle = document.querySelector(".meal-header h1");

let iEle;
let targetMeal = JSON.parse(localStorage.getItem("targetMeal"));

let favouriteMeal = {};
if (
  localStorage.getItem("favouriteMeal") !== "undefined" &&
  localStorage.getItem("favouriteMeal") !== null
) {
  favouriteMeal = JSON.parse(localStorage.getItem("favouriteMeal"));
}

function mealPageFavIcon() {
  iEle = document.createElement("i");
  iEle.addEventListener("click", updateFavouriteMeal);
  iEle.classList.add("fa-solid", "fa-heart");

  if (favouriteMeal[targetMeal.idMeal]) {
    iEle.classList.add("show");
  } else {
    iEle.classList.remove("show");
  }
  headingEle.append(iEle);
}

export default mealPageFavIcon;
