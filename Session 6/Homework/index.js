window.onscroll = function() {myFunction1()};

var menu = document.getElementById("stick_menu");
var sticky = stick_menu.offsetTop;

function myFunction1() {
  if (window.pageYOffset >= sticky) {
    stick_menu.classList.add("sticky")
  } else {
    stick_menu.classList.remove("sticky");
  }
};

function myFunction2() {
  var x = document.getElementById("nav");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};