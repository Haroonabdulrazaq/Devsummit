const navbar =  document.querySelector(".mobile-nav");
const mainNav =  document.querySelector(".main-nav");

let counter =0;

navbar.addEventListener("click", (event) => {
    counter++;
  if(counter%2 == 0){
    mainNav.classList.add("appear");
  }else{
    mainNav.classList.remove("appear");
  }
 
});

