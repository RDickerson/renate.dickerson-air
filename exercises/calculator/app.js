document.getElementById("addButton").addEventListener("click", function(e){
    e.preventDefault()

    document.getElementById("addAnswer").innerHTML = Number(document.add.fNum.value) + Number(document.add.sNum.value)
})

document.getElementById("subButton").addEventListener("click", function(e){
    e.preventDefault()

    document.getElementById("subAnswer").innerHTML =  Number(document.subtract.fNum.value) - Number(document.subtract.sNum.value)
})

document.getElementById("mulButton").addEventListener("click", function(e){
    e.preventDefault()

    document.getElementById("mulAnswer").innerHTML = Number(document.multiply.fNum.value) * Number(document.multiply.sNum.value)
    
})

