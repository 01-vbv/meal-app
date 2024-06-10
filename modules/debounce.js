// ########## Wait time for next api, default set to 300 ######

function debounce(func, timout = 300) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, timout);
  };
}

export default debounce;
