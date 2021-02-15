const navigation = () => {
    const burger = document.querySelector(".burger");
    const navLink = document.querySelectorAll(".nav-links li");
    const nav = document.querySelector(".nav-links");
  
    burger.addEventListener("click", () => {
      //Toggle Navbar
      nav.classList.toggle("nav-active");
      
      //Nav links animation
      navLink.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
            0.4}s`;
        }
      });
      
      // Burger Animation
      burger.classList.toggle("toggle");
    });
  };
  
  const screensize = x => {
    const navLink = document.querySelectorAll(".nav-links li");
    navLink.forEach((link, index) => {
      if (x.matches) {
        if (index == navLink.length / 2) {
          link.classList.remove("center-nav");
        }
      } else {
        if (index == navLink.length / 2) {
          link.classList.add("center-nav");
        }
      }
    });
  };
  
  
  var x = window.matchMedia("(max-width: 900px)");
  navigation();
  screensize(x);
  x.addListener(screensize);
  
// scroll transition
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}