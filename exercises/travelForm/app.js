document.travel.addEventListener("submit", function(e){
    e.preventDefault()

    document.getElementById("name").innerHTML = document.travel.fName.value + document.travel.lName.value
    document.getElementById("age").innerHTML = Number(document.travel.age.value)
    document.getElementById("gender").innerHTML = document.travel.gender.value
    document.getElementById("destination").innerHTML = document.travel.whereTo.value
    var dietNeeds = []
    var checkedBoxes = document.querySelectorAll("input[name=diet]:checked")
    for (var i = 0; i < checkedBoxes.length; i++) {
        console.log(dietNeeds.push(checkedBoxes[i].value))
    }
    document.getElementById("dietNeed").innerHTML = dietNeeds.join(", ")
})
