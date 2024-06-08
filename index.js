import getMealsData from "./modules/FetchData.js";
import getSuggestions from "./modules/getSuggestions.js";
import { updateMealsList } from "./modules/updateMealsList.js";
import getValue from "./modules/getInputValue.js";
import navigateToFavPage from "./modules/navigateToFavPage.js";

const favMealsEle = document.getElementById("fav-meals");
const searchboxEle = document.getElementById("search-box");
const searchListEle = document.getElementById("search-list");
const showMoreBtn = document.getElementById("show-more-btn");

let mealsData;
let list;
let value;

//################### Display More Suggestions Handler (show-more Btn functionality) ##################
function showMore(event) {
  let list = event.target.list;
  let index = event.target.index;

  updateMealsList(index, list, searchListEle);
  console.log(list);
  event.target.index += 5;

  if (event.target.index >= list.length) {
    showMoreBtn.style.display = "none";
  }
}

//################# Search Result (Main Function) ###########################
async function searchResult() {
  searchListEle.textContent = "";
  value = getValue();

  if (value == "") {
    showMoreBtn.style.display = "none";
    return;
  }

  let firstChar = value.charAt(0);
  mealsData = await getMealsData(firstChar);

  list = getSuggestions(value, mealsData);

  updateMealsList(0, list, searchListEle);

  if (list.length > 5) {
    showMoreBtn.style.display = "block";
  } else {
    showMoreBtn.style.display = "none";
  }

  [showMoreBtn.index, showMoreBtn.list] = [5, list];
  showMoreBtn.addEventListener("click", showMore);
  showMoreBtn.addEventListener("dblclick", showMore);
}

//event listeners
searchboxEle.addEventListener("keyup", searchResult);
favMealsEle.addEventListener("click", navigateToFavPage);
