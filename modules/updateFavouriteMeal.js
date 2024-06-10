let mealsData;
let favouriteMeal = {};

// ############ fav icon functionality ############3
async function updateFavouriteMeal(event) {
  if (
    localStorage.getItem("favouriteMeal") !== "undefined" &&
    localStorage.getItem("favouriteMeal") !== null
  ) {
    favouriteMeal = JSON.parse(localStorage.getItem("favouriteMeal"));
  }
  event.stopPropagation();
  mealsData = JSON.parse(localStorage.getItem("mealsData"));
  let currNode = event.target;
  let mealId = currNode.parentNode.getAttribute("id");
  currNode.classList.toggle("show");
  if (currNode.classList.contains("show")) {
    for (let i = 0; i < mealsData.meals.length; i++) {
      if (mealId === mealsData.meals[i]["idMeal"]) {
        favouriteMeal[mealId] = mealsData.meals[i];
        break;
      }
    }
  } else {
    delete favouriteMeal[mealId];
  }
  localStorage.setItem("favouriteMeal", JSON.stringify(favouriteMeal));
}

export default updateFavouriteMeal;
