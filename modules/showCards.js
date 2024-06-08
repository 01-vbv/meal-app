import navigateToMealPage from "./navigateToMealPage.js";
import removeFav from "./removeFav.js";

const mealCardsEle = document.getElementById("meal-cards");
const emptyFavContainer = document.querySelector(".empty-cards-container");

let favouriteMeal = {};
if (
  localStorage.getItem("favouriteMeal") !== "undefined" &&
  localStorage.getItem("favouriteMeal") !== null
) {
  favouriteMeal = JSON.parse(localStorage.getItem("favouriteMeal"));
}

let keys = Object.keys(favouriteMeal);
let card;
let mealName, image, removeBtn, exploreBtn;

function showCards() {
  for (let i = 0; i < keys.length; i++) {
    card = document.createElement("div");
    card.classList.add("card");
    mealName = document.createElement("p");
    image = document.createElement("img");
    removeBtn = document.createElement("i");
    removeBtn.classList.add("fa-solid", "fa-circle-xmark", "remove-btn");
    removeBtn.setAttribute("id", keys[i]);
    exploreBtn = document.createElement("i");
    exploreBtn.classList.add("fa-solid", "fa-carrot", "explore-btn");
    mealName.textContent = favouriteMeal[keys[i]].strMeal;
    image.setAttribute("src", favouriteMeal[keys[i]].strMealThumb);
    removeBtn.addEventListener("click", removeFav);
    exploreBtn.firstChar = favouriteMeal[keys[i]].strMeal
      .toLowerCase()
      .charAt(0);
    exploreBtn.setAttribute("id", keys[i]);
    exploreBtn.addEventListener("click", navigateToMealPage);

    card.append(removeBtn, mealName, image, exploreBtn);
    mealCardsEle.append(card);
  }
  isFavListEmpty(favouriteMeal);
}

function isFavListEmpty(favouriteMeal) {
  console.log(favouriteMeal);
  console.log(Object.keys(favouriteMeal).length);
  if (Object.keys(favouriteMeal).length === 0) {
    emptyFavContainer.classList.remove("hide");
    mealCardsEle.classList.add("hide");
    mealCardsEle.style.paddingBottom = "0px";
  } else {
    emptyFavContainer.classList.add("hide");
    mealCardsEle.classList.remove("hide");
    mealCardsEle.style.paddingBottom = "40px";
  }
}

export { showCards, isFavListEmpty };
