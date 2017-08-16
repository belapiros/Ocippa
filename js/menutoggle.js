// hide and open navigation

// value of the last scrolled distance
var last_scrolled_distance = 0
window.addEventListener('scroll', function() {

  // value of the actual sctolled distance
  var actual_scrolled_distance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //
  var headerWrapper = document.getElementById("headerWrapper");
  // in case of scroll up
  if (last_scrolled_distance > actual_scrolled_distance) {
    // fixing the header to the top
    headerWrapper.style.transform = "translateY(0%)";
  } else { // in case of scroll down
    // moving the header to the top of the page
    headerWrapper.style.transform = "translateY(-100%)";
  }
  // store the last scrolled distance for the next comparison
  last_scrolled_distance = actual_scrolled_distance;

}, true);


// hide and open menu
window.onload = function() {
  //
  var burger_menu = document.getElementById("burgerMenu");
  //
  var side_menu = document.getElementById("sideMenu");
  //
  var side_menu_close = document.getElementById("sideMenuClose");
  //
  var x_button = document.getElementById("xButton");
  // open the menu by clicking the burgermenu
  burger_menu.onclick = function() {
    side_menu.classList.add("open");
    side_menu_close.classList.add("fade");
  }
  // close the menu by clicking the x
  x_button.onclick = function() {
    side_menu.classList.remove("open");
    side_menu_close.classList.remove("fade");
  }
  // close the menu by clicking out of the menu
  side_menu_close.onclick = function() {
    side_menu.classList.remove("open");
    side_menu_close.classList.remove("fade");
  }
}
