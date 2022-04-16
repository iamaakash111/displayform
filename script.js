
const button = document.querySelector(".button");
const form = document.querySelector("#form");
const layer = document.querySelector(".layer"); 

button.addEventListener("click", function(e){
       e.preventDefault();
       layer.style.display = "inline-block";
       form.classList.toggle("show");
})

layer.addEventListener("click", function(e){
      form.classList.toggle("show");
      layer.style.display = "none";
})