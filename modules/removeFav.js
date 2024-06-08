import { isFavListEmpty } from "./showCards.js";

const mealCardsEle = document.getElementById("meal-cards");
const emptyFavContainer = document.querySelector(".empty-cards-container");
let favouriteMeal = {};

if (
  localStorage.getItem("favouriteMeal") !== "undefined" &&
  localStorage.getItem("favouriteMeal") !== null
) {
  favouriteMeal = JSON.parse(localStorage.getItem("favouriteMeal"));
}

function removeFav(event) {
  let id = event.target.id;
  event.target.parentNode.remove();
  delete favouriteMeal[id];
  isFavListEmpty(favouriteMeal);
  // if (Object.keys(favouriteMeal).length === 0) {
  //   emptyFavContainer.classList.remove("hide");
  //   mealCardsEle.classList.add("hide");
  //   console.log("hidden");
  // } else {
  //   emptyFavContainer.classList.add("hide");
  //   mealCardsEle.classList.remove("hide");
  //   console.log("visible");
  // }
  localStorage.setItem("favouriteMeal", JSON.stringify(favouriteMeal));
}

export default removeFav;
