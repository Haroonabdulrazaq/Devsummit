const navbar =  document.querySelector(".mobile-nav");
const navTop =  document.querySelector(".nav-top");

navbar.addEventListener("click", (event) => {

  navTop.classList.add("disappear");
  console.log("Hello")

});