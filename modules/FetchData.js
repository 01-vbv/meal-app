// ############# Fetching meals details by name ############
async function getMealsData(value) {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
  );
  let mealsData = await res.json();
  localStorage.setItem("mealsData", JSON.stringify(mealsData));
  return mealsData;
}

// ############## Fetching meals details by id #############
async function getMealById(id) {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  let meal = await res.json();
  return meal;
}

export { getMealsData, getMealById };
