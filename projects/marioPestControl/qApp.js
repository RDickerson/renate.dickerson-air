document.calculate.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("total").innerHTML = `Total: ${document.calculate.goom.valueAsNumber * 5 + document.calculate.bob.valueAsNumber * 7 + document.calculate.cheep.valueAsNumber * 11} Coins`;
});