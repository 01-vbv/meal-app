import updateFavouriteMeal from "./modules/updateFavouriteMeal.js";
import navigateToFavPage from "./modules/navigateToFavPage.js";

const favMealsEle = document.getElementById("fav-meals");
const headingEle = document.querySelector(".meal-header h1");
const imageEle = document.getElementById("meal-image");
const mealDescEle = document.getElementById("meal-desc");
const tableEle = document.getElementById("ingredient-table");
const videoInstrEle = document.getElementById("video-instr");

let targetMeal = JSON.parse(localStorage.getItem("targetMeal"));
let targetMealIndex = JSON.parse(localStorage.getItem("targetMealIndex"));
let favouriteMeal = {};

if (
  localStorage.getItem("favouriteMeal") !== "undefined" &&
  localStorage.getItem("favouriteMeal") !== null
) {
  favouriteMeal = JSON.parse(localStorage.getItem("favouriteMeal"));
}

let index = 1;
let tableRow = "";

headingEle.textContent = targetMeal.strMeal;
headingEle.setAttribute("id", targetMeal.idMeal);

//create favourite heart button and append to li
let iEle = document.createElement("i");
iEle.addEventListener("click", updateFavouriteMeal);
iEle.classList.add("fa-solid", "fa-heart");
iEle.setAttribute("id", targetMealIndex);

headingEle.append(iEle);
imageEle.setAttribute("src", `${targetMeal.strMealThumb}`);
mealDescEle.textContent = targetMeal.strInstructions;

if (favouriteMeal[targetMeal.idMeal]) {
  iEle.classList.add("show");
} else {
  iEle.classList.remove("show");
}

while (targetMeal[`strIngredient${index}`] != "") {
  tableRow =
    tableRow +
    `<tr><td>${targetMeal[`strIngredient${index}`]}</td><td>${
      targetMeal[`strMeasure${index}`]
    }</td></tr>`;
  index++;
}

videoInstrEle.innerHTML = `Video Intruction <i class="fa-solid fa-play"></i>`;
videoInstrEle.setAttribute("href", targetMeal.strYoutube);

tableEle.insertAdjacentHTML("beforeend", tableRow);
favMealsEle.addEventListener("click", navigateToFavPage);
