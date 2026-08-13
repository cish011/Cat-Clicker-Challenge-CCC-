const button = document.getElementById("cat")
const upgradeButton = document.getElementById("upgrade")
const text = document.getElementById("text")
let cats = 0
let catIncrease = 1
let upgradeCost = 10

button.textContent = "10 cats"
button.addEventListener("click", function() {
    cats += catIncrease
    text.textContent = "Cats: " + cats
})
upgradeButton.addEventListener("click", function() {
    if (cats >= upgradeCost){
        catIncrease += 1
        cats -= upgradeCost
        upgradeButton.textContent = `${upgradeCost} cats`
        text.textContent = "Cats: " + cats
    }else{
        upgradeButton.textContent = `you need ${upgradeCost} cats to upgrade`
        setTimeout(function(){
            upgradeButton.textContent = `${upgradeCost} cats`
        },2500)
    }
})