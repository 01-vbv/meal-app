const tableEle = document.getElementById("ingredient-table");

let index = 1;
let tableRow = "";
let targetMeal = JSON.parse(localStorage.getItem("targetMeal"));

let favouriteMeal = {};
if (
  localStorage.getItem("favouriteMeal") !== "undefined" &&
  localStorage.getItem("favouriteMeal") !== null
) {
  favouriteMeal = JSON.parse(localStorage.getItem("favouriteMeal"));
}

function updateMealPageTable() {
  while (
    targetMeal[`strIngredient${index}`] != "" &&
    targetMeal[`strIngredient${index}`] != null
  ) {
    tableRow =
      tableRow +
      `<tr><td>${targetMeal[`strIngredient${index}`]}</td><td>${
        targetMeal[`strMeasure${index}`]
      }</td></tr>`;
    index++;
  }

  tableEle.insertAdjacentHTML("beforeend", tableRow);
}

export default updateMealPageTable;
