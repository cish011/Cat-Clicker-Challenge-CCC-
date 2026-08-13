const button = document.getElementById("cat")
const text = document.getElementById("text")
let cats = 0
button.addEventListener("click", function() {
    cats += 1
    text.textContent = "Cats: " + cats
})