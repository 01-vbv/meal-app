import updateMealPageTable from "./updateMealPageTable.js";
import mealPageFavIcon from "./mealPageFavIcon.js";

const headingEle = document.querySelector(".meal-header h1");
const imageEle = document.getElementById("meal-image");
const mealDescEle = document.getElementById("meal-desc");

let targetMeal = JSON.parse(localStorage.getItem("targetMeal"));

async function showMealPage() {
  targetMeal = JSON.parse(localStorage.getItem("targetMeal"));
  headingEle.textContent = targetMeal.strMeal;
  headingEle.setAttribute("id", targetMeal.idMeal);
  mealPageFavIcon();
  mealBodyDetails();
  updateMealPageTable();
}

function mealBodyDetails() {
  let downloadingImage = new Image();

  downloadingImage.onload = function () {
    imageEle.src = this.src;
  };

  downloadingImage.src = targetMeal.strMealThumb;
  mealDescEle.textContent = targetMeal.strInstructions;
}

export { showMealPage };
