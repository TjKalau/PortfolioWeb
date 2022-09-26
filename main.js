// Function for copying the phonenumber
function copyPhone() {
      
    /* Copy phonenumber into clipboard */
    navigator.clipboard.writeText
        ("06-43794292");
}

// Function for copying the phonenumber
function copyMail() {
    /* Copy phonenumber into clipboard */
    navigator.clipboard.writeText
        ("tjkalau4@gmail.com");
}

// button top -------------------------------------------------------------------------------------------------------------------------------
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ----------------------------------------------------------------------------------------------------------------------------------


// Navbar change of background
let navbar = document.getElementById("navbar")
// let navLink = document.getElementById("nav_link")
let navLink = document.getElementsByClassName('btn_nav')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunctionNav()};

// When the scroller is down 20px the background changes, when its set back in place it returns to transparant
function scrollFunctionNav() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.backgroundColor = "#cfdde6";
    for(link of navLink) {
      link.style.color = '#063549'
    }
    mybutton.style.display = "block";
  } else {
    navbar.style.backgroundColor = "";
    for (link of navLink) {
      link.style.color = ''
    }
    mybutton.style.display = "none";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("nav_active");
var btns = header.getElementsByClassName("btn_nav");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}