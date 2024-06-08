const searchboxEle = document.getElementById("search-box");

function getValue() {
  let value = searchboxEle.value.toLowerCase().trim();
  return value;
}

export default getValue;
