function scrollIt(id) {
  let element = document.getElementById(id);
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
  document.getElementById("mobile-nav").style.width = 0;
}

export default scrollIt;