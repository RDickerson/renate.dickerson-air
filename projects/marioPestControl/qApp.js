document.calculate.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("total").innerHTML = `Total ${Number(document.calculate.goom.value * 5) + Number(document.calculate.bob.value * 7) + Number(document.calculate.cheep.value * 11)} Coins`;
});
