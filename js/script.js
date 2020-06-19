const navbar =  document.querySelector(".mobile-nav");
const navTop =  document.querySelector(".nav-top");

navbar.addEventListener("click", (event) => {

  navTop.classList.add("disappear");
  console.log("Hello")

});




//   navbar.addEventListener("click", (event) => {
//   console.log("Hello world");
//   // ;
// });

// const john = document.getElementById("john-wrapper");

// prev.addEventListener("click", (event) => {
//   tanya.classList.add("tanya-wrapper");
//   tanya.classList.remove("disappear");

//   john.classList.add("disappear");
//   john.classList.remove("john-wrapper");
// });
