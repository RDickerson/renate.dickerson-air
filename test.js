document.getElementById("enter#Baddies").addEventListener("click", Calculate);

function Calculate(){
    var goomas= document.getElementById("countGoomas").value;
    var boboms= document.getElementById("countBoboms").Value;
    var cheeps= document.getElementById("countCheeps").Value;

    goomas *= 5;
    boboms *= 7;
    cheeps *= 11;
    var total = goomas + boboms + cheeps;

    document.getElementById("resultsGoombas").textContent = "goomas";
    document.getElementById("resultsBobombs").textContent = "boboms";
    document.getElementById("resultsCheeps").textContent = "cheeps";
    document.getElementById("resultsTotal").textContent = "total";
}