// ############### Loader for wait time ####################
async function toggleLoader(
  loaderEle,
  containerEle,
  loaderFlag,
  displayStyle = "block"
) {
  if (loaderFlag) {
    loaderEle.style.display = displayStyle;
    containerEle.style.display = "none";
  } else {
    loaderEle.style.display = "none";
    containerEle.style.display = displayStyle;
  }
}
export default toggleLoader;
