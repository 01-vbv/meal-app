const searchboxEle = document.getElementById("search-box");

// ####### Read input value from input field ###########3
function getValue() {
  let value = searchboxEle.value.toLowerCase().trim();
  return value;
}

export default getValue;
