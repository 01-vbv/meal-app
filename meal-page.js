// import updateFavouriteMeal from "./modules/updateFavouriteMeal.js";
import navigateToFavPage from "./modules/navigateToFavPage.js";
import { showMealPage } from "./modules/showMealPage.js";
import toggleLoader from "./modules/loader.js";

const favMealsEle = document.getElementById("fav-meals");
const videoInstrEle = document.getElementById("video-instr");
const mainContentEle = document.querySelector(".main-content");
const loaderEle = document.querySelector(".loader");

let targetMeal = JSON.parse(localStorage.getItem("targetMeal"));

await toggleLoader(loaderEle, mainContentEle, true, "inline-block");
await showMealPage();
await toggleLoader(loaderEle, mainContentEle, false, "flex");

videoInstrEle.innerHTML = `Video Instruction <i class="fa-solid fa-play"></i>`;
videoInstrEle.setAttribute("href", targetMeal.strYoutube);

// tableEle.insertAdjacentHTML("beforeend", tableRow);
favMealsEle.addEventListener("click", navigateToFavPage);
