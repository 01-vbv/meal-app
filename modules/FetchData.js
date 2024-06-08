import getValue from "./getInputValue.js";

const searchboxEle = document.getElementById("search-box");

let mealsData;
let ch = "";

async function getMealsData(firstChar) {
  if (firstChar != ch) {
    ch = firstChar;
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${ch}`
    );
    mealsData = await res.json();
  }

  localStorage.setItem("mealsData", JSON.stringify(mealsData));
  return mealsData;
}

export default getMealsData;
