import navigateToMealPage from "./navigateToMealPage.js";
import removeFav from "./removeFav.js";

const mealCardsEle = document.getElementById("meal-cards");
const emptyFavContainer = document.querySelector(".empty-cards-container");
const emptyContainerPara = document.querySelector(".empty-cards-container p");
const backPackerImgEle = document.querySelector("#backpacker-img");

let favouriteMeal = {};
if (
  localStorage.getItem("favouriteMeal") !== "undefined" &&
  localStorage.getItem("favouriteMeal") !== null
) {
  favouriteMeal = JSON.parse(localStorage.getItem("favouriteMeal"));
}

let keys = Object.keys(favouriteMeal);
let card;
let mealName, removeBtn, exploreBtn;

async function showCards() {
  for (let i = 0; i < keys.length; i++) {
    card = document.createElement("div");
    card.classList.add("card");
    mealName = document.createElement("p");
    let image = document.createElement("img");
    image.src = "resources/assests/v233-aum-24-cooking-42-job106.jpg";
    removeBtn = document.createElement("i");
    removeBtn.classList.add("fa-solid", "fa-circle-xmark", "remove-btn");
    removeBtn.setAttribute("id", keys[i]);
    exploreBtn = document.createElement("i");
    exploreBtn.classList.add("fa-solid", "fa-carrot", "explore-btn");
    mealName.textContent = favouriteMeal[keys[i]].strMeal;
    let downloadingImage = new Image();
    downloadingImage.onload = function () {
      image.src = this.src;
    };
    downloadingImage.src = favouriteMeal[keys[i]].strMealThumb;
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
  if (Object.keys(favouriteMeal).length === 0) {
    emptyFavContainer.classList.remove("hide");
    mealCardsEle.classList.add("hide");
    backPackerImgEle.src = "resources/assests/backpacker.png";
    mealCardsEle.style.paddingBottom = "0px";
    emptyContainerPara.textContent = "No Favourite Meal Added";
  } else {
    emptyFavContainer.classList.add("hide");
    mealCardsEle.classList.remove("hide");
    mealCardsEle.style.paddingBottom = "40px";
    backPackerImgEle.src = "";
  }
}

export { showCards, isFavListEmpty };
