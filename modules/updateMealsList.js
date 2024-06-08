import navigateToMealPage from "./navigateToMealPage.js";
import updateFavouriteMeal from "./updateFavouriteMeal.js";

function updateMealsList(initalIndex, list, ul) {
  let index;
  let favouriteMeal = {};

  if (
    localStorage.getItem("favouriteMeal") !== "undefined" &&
    localStorage.getItem("favouriteMeal") !== null
  ) {
    favouriteMeal = JSON.parse(localStorage.getItem("favouriteMeal"));
  }

  for (
    index = initalIndex;
    index < list.length && index < initalIndex + 5;
    index++
  ) {
    //create and update <li>
    let listEle = document.createElement("li");
    listEle.setAttribute("id", list[index].idMeal);
    listEle.addEventListener("click", navigateToMealPage);
    listEle.textContent = list[index].strMeal;
    listEle.firstChar = list[index].strMeal.toLowerCase().charAt(0);
    //create favourite heart button and append to li
    let iEle = document.createElement("i");
    iEle.addEventListener("click", updateFavouriteMeal);
    iEle.classList.add("fa-solid", "fa-heart");
    iEle.setAttribute("id", index);
    //keep the meal heart icon color to pink, if present in favourite list
    if (favouriteMeal[list[index].idMeal]) {
      iEle.classList.add("show");
    } else {
      iEle.classList.remove("show");
    }

    listEle.append(iEle);
    ul.append(listEle);
  }
}

export { updateMealsList };
