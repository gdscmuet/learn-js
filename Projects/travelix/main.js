//Selectors

let header=document.querySelector(".header");
let hamburgerMenu=document.querySelector(".hamburger-menu");

// document.write("Hello from JavaScript!")
// alert("I am an alert box!");
window.addEventListener('scroll',function(){
    let windowPosition = window.scrollY >0;
    header.classList.toggle('active', windowPosition)

})

document.write("I am still working")

hamburgerMenu.addEventListener("click",function(){
    header.classList.toggle("menu-open");
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
