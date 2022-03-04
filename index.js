var navLink = document.querySelector("#nav-links");
var navToggle = document.querySelector(".mobile-nav-toggle");


navToggle.addEventListener("click", function() {
     var visibility = navLink.getAttribute("data-visible");

     if(visibility == "false") {
          navLink.setAttribute("data-visible", "true");
     } else {
          navLink.setAttribute("data-visible", "false");
     }
});