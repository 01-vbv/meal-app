import getMealsData from "./FetchData.js";

async function navigateToMealPage(event) {
  console.log(event.target);
  let mealsData = await getMealsData(event.target.firstChar);
  let targetMeal;
  let i;

  for (i = 0; i < mealsData.meals.length; i++) {
    if (event.target.id == mealsData.meals[i].idMeal) {
      targetMeal = mealsData.meals[i];
      break;
    }
  }

  localStorage.setItem("targetMeal", JSON.stringify(targetMeal));
  localStorage.setItem("targetMealIndex", i + 1);
  window.open(`./meal-page.html`);
}

export default navigateToMealPage;
