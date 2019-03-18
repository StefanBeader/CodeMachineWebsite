function scrollIt(id) {
  let element = document.getElementById(id);
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}

export default scrollIt;