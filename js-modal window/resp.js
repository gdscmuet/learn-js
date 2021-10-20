modalBtn = document.querySelector(".modal-btn")
modelOverlay = document.querySelector(".model-overlay")
closeBtn = document.querySelector(".close-btn")


modalBtn.addEventListener("click", function() {
    modelOverlay.classList.add("show-overlay")
})

closeBtn.addEventListener("click", function() {
    modelOverlay.classList.remove("show-overlay");
})