//########## Naviagte to meal page ##################
import { getMealById } from "./FetchData.js";

async function navigateToMealPage(event) {
  let meal = await getMealById(event.target.id);
  let targetMeal = meal.meals[0];

  localStorage.setItem("targetMeal", JSON.stringify(targetMeal));
  window.open(`./meal-page.html`);
}

export default navigateToMealPage;
