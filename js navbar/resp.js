let burger = document.querySelector(".burger");
let navitems = document.querySelector(".nav-items");

burger.addEventListener('click', () => {
    navitems.classList.toggle('show-items');
})