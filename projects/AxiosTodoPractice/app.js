//make all todo items appear on the screen

axios.get("https://api.vschool.io/renatedickerson/todo").then(function(res){
    var data = res.data;
    view(data);
    console.log(data);
});

function view(res){
    res.forEach(function(todo) {
        var div = document.createElement("div");
        document.getElementById("todoContainer").appendChild(div);
        div.classList.add("todoItem");
        div.innerHTML = `
                        <h3>${todo.title}</h3>
                        <p>${todo.description}</p>
                        <p>${todo.price}</p>
                        <img class="hidden" src=${todo.imgUrl}/>
                        <button id="done" onclick="done()">Done</button>
                        <button onclick="deleteTodo('${todo._id}')">Delete</button>
                        `; 
    });
}

//post a new todo item via a form submit

document.newTodo.addEventListener("submit", function(e){
    e.preventDefault();
    var newPost = {};
    newPost.title = newTodo.title.value;
    newPost.description = newTodo.description.value;
    newPost.price = newTodo.price.value;
    axios.post("https://api.vschool.io/renatedickerson/todo", newPost).then(function(res){
    console.log(res);
    var button = document.getElementById("new");
    var form = document.newTodo;
    button.classList.toggle("hidden");
    form.classList.toggle("hidden");
    });
});

//user friendly disappear things when not needed

document.getElementById("getForm").addEventListener("click", function(){
    var button = document.getElementById("getForm");
    var form = document.newTodo;
    button.classList.toggle("hidden");
    form.classList.toggle("hidden");
});

// add a check box to every todo item

function done() {
    var button = document.getElementById("done");
    button.textContent === "Done" ? "Not Done" : "Done";

}

// when compleated strikethorugh the todo item

// add the option to delete todo

function deleteTodo(id) {
    console.log(id)
    axios.delete(`https://api.vschool.io/renatedickerson/todo/${id}`);
}


