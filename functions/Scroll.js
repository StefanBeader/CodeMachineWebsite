function scrollIt(id, event) {
  if (event !== undefined) event.preventDefault();
  let element = document.getElementById(id);
  window.scroll({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop,
  });
  document.getElementById("mobile-nav").style.width = 0;
}

export default scrollIt;