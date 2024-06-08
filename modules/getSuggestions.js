function getSuggestions(value, mealsData) {
  let result = [];
  mealsData.meals.forEach((meal) => {
    if (meal.strMeal.toLowerCase().startsWith(value)) {
      result.push(meal);
    }
  });
  return result;
}

export default getSuggestions;
