var xhr = new XMLHttpRequest();


xhr.onreadystatechange = function () {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        console.log(data.objects[0].pokemon);
        displayThemAll(data.objects[0].pokemon);
    }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);  
xhr.send();

function displayThemAll(data) {
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = `
                        <h3>I cought ${data[i].name[0].toUpperCase() + data[i].name.slice(1)} today!<h3>
                        `;
        document.getElementById("pickMe").appendChild(div);
        div.style.backgroundColor = "purple";
        div.style.width = "300px";
        div.style.borderColor = "white";
        div.style.borderStyle = "dashed";
    }
}