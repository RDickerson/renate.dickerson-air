document.peachCal.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("peachTotal").innerHTML = `Total ${Number(document.peachCal.goom.value * 5) + Number(document.peachCal.bob.value * 7) + Number(document.peachCal.cheep.value * 11)} Coins`;
});

document.luigiCal.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("luigiTotal").innerHTML = `Total ${Number(document.luigiCal.goom.value * 5) + Number(document.luigiCal.bob.value * 7) + Number(document.luigiCal.cheep.value * 11)} Coins`;
});

document.yoshiCal.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("yoshiTotal").innerHTML = `Total ${Number(document.yoshiCal.goom.value * 5) + Number(document.yoshiCal.bob.value * 7) + Number(document.yoshiCal.cheep.value * 11)} Coins`;
});
