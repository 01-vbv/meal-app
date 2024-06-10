const searchListEle = document.getElementById("search-list");

//############ Update array with suggestions ##########
async function getSuggestions(mealsData) {
  searchListEle.textContent = "";
  let result = [];
  mealsData.meals.forEach((meal) => {
    result.push(meal);
  });
  return result;
}

export default getSuggestions;
