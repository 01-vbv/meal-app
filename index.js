// #################### Landing page ############################

import { getMealsData } from "./modules/FetchData.js";
import getSuggestions from "./modules/getSuggestions.js";
import { updateMealsList } from "./modules/updateMealsList.js";
import getValue from "./modules/getInputValue.js";
import navigateToFavPage from "./modules/navigateToFavPage.js";
import toggleLoader from "./modules/loader.js";
import debounce from "./modules/debounce.js";

const favMealsEle = document.getElementById("fav-meals");
const searchboxEle = document.getElementById("search-box");
const searchListEle = document.getElementById("search-list");
const showMoreBtn = document.getElementById("show-more-btn");
const loaderEle = document.querySelector(".loader");
const noDataEle = document.querySelector(".no-data");

let mealsData;
let list;
let value;

//################### Display More Suggestions Handler (show-more Btn functionality) ##################
function showMore(event) {
  let list = event.target.list;
  let index = event.target.index;
  updateMealsList(index, list, searchListEle);
  event.target.index += 5;

  if (event.target.index >= list.length) {
    showMoreBtn.style.display = "none";
  }
}

//################# Search Result (Main Function) ###########################

async function searchResult() {
  try {
    value = getValue();
    if (value == "") {
      searchListEle.textContent = "";
      noDataEle.style.display = "none";
      showMoreBtn.style.display = "none";
      return;
    }

    noDataEle.style.display = "none";
    showMoreBtn.style.display = "none";
    await toggleLoader(loaderEle, searchListEle, true, "flex");
    mealsData = await getMealsData(value);
    list = await getSuggestions(mealsData);
    await updateMealsList(0, list, searchListEle);
    await toggleLoader(loaderEle, searchListEle, false, "flex");

    if (list.length > 5) {
      showMoreBtn.style.display = "block";
    } else {
      showMoreBtn.style.display = "none";
    }

    [showMoreBtn.index, showMoreBtn.list] = [5, list];
    showMoreBtn.addEventListener("click", showMore);
  } catch (err) {
    searchListEle.textContent = "";
    await toggleLoader(loaderEle, searchListEle, false, "flex");
    noDataEle.style.display = "block";
  }
}

//event listeners
searchboxEle.addEventListener(
  "keyup",
  debounce(() => searchResult())
);

favMealsEle.addEventListener("click", navigateToFavPage);
