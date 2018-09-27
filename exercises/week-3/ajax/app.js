// JS
    //refert to document with document
    //How to create HTML Elements
        var h1 = document.createElement("div");
        var display = document.getElementById("list");
    //How to append HTML Elements
        h1.textContent = "Hey I am h1.";
        display.appendChild(h1);

// C-R-U-D:
    // Http:

    // post:   Create
    // get:    Read
    // put:    Update
    // delete: Destroy

// AJAX - Asynchronous JavaScript and XML (eXtensible Markup Language)
    //readystate, and onreadystatechange
var xhr = new XMLHttpRequest();
console.dir(xhr);

xhr.onreadystatechange = function(){
    // console.log(xhr);
    if (xhr.readyState == 4 && xhr.status == 200) {
        // parsing (process to turn raw Json into JS)
        // console.log(xhr.responseText);
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        displayData(data);
    }
};

    //argument 1 request type argument 2 URL arguemnt 3 do you want it asynchronous (t/f)
xhr.open("GET", "https://swapi.co/api/people/1/", true);
xhr.send();


function displayData(data) {
    var display = document.getElementById("list");
    display.innerHTML = `
                        <h1>${data.name}</h1>
                        <p> Hair Color: ${data.hair_color}
                            <br>
                            Eye Color: ${data.eye_color}
                            <br>
                            Height: ${data.height}
                        </p>
                        `;
    display.style.backgroundColor = data.eye_color;
    display.classList.add("new-class");
}

