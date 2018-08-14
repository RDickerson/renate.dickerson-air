// get request to pull data from API
function getData() {
    axios.get("https://api.vschool.io/renatedickerson/todo").then(function(res){
        var data = res.data;
        view(data);
    });
}

//make all todo items appear on the screen
function view(res){
    document.getElementById("todoContainer").innerHTML = "";
    res.forEach(function(todo) {
        var div = document.createElement("div");
        document.getElementById("todoContainer").appendChild(div);
        div.classList.add("todoItem");
        div.innerHTML = `
                        <img src="${todo.imgUrl}" height="60px" width="60px"/>
                        <p>${todo.title}</p>
                        <p>${todo.description}</p>
                        <p>${todo.price}</p>
                        Done<input type="radio" name="complete" onclick="done('${todo.completed}', '${todo._id}')">
                        Not Done<input type="radio" name="complete" onclick="notDone('${todo.completed}', '${todo._id}')"/>
                        <br>
                        <button onclick="deleteTodo('${todo._id}')">Delete</button>
                        `;
        if (todo.completed) {
            div.classList.add("todoItemImg");
        }
    });
}

//post a new todo item to the API via a form submit
document.newTodo.addEventListener("submit", function(e){
    e.preventDefault();
    var newPost = {};
    newPost.title = newTodo.title.value;
    newPost.description = newTodo.description.value;
    newPost.price = newTodo.price.value;
    newPost.imgUrl = newTodo.image.value;
    axios.post("https://api.vschool.io/renatedickerson/todo", newPost).then(function(res){
    console.log(res);
    getData();
    });
    var button = document.getElementById("getForm");
    var form = document.newTodo;
    button.classList.toggle("hidden");
    form.classList.toggle("hidden");
});

//user friendly disappear things when not needed
document.getElementById("getForm").addEventListener("click", function(){
    var button = document.getElementById("getForm");
    var form = document.newTodo;
    button.classList.toggle("hidden");
    form.classList.toggle("hidden");
});

// add a radio onclick to every todo item so that when marked completed a strikethorugh will appearon the item
function done(completed, id) {
    var isDone = {
        completed: true
    };
    if (completed !== true) {
        axios.put(`https://api.vschool.io/renatedickerson/todo/${id}`, isDone).then(function(res){
            console.log(res);
            getData();
        });
    }
}

function notDone(completed, id) {
    var isNotDone = {
        completed: false
    };
    if (completed) {
        axios.put(`https://api.vschool.io/renatedickerson/todo/${id}`, isNotDone).then(function(res){
            console.log(res);
            getData();
        });
    }
}

// add the option to delete todo
function deleteTodo(id) {
    // console.log(id);
    axios.delete(`https://api.vschool.io/renatedickerson/todo/${id}`).then(function(res){
        getData();
    });
}

//call the function that gets the data from the API (maiking the view trigger and alowing auto updating after each other function is called)
getData();


///////////////////////
//Playground Below////
/////////////////////

///|||||||Warning: Under Construction|||||||||\\\
///|||||||Code may not be functional|||||||\\\

// function viewForm(res){
//     res.forEach(function(todo) {
//         var form = document.createElement("form");
//         var title = document.createElement("input");
//         var description = document.createElement("input");
//         var price = document.createElement("input");
//         var done = document.createElement("span");
//         var deleteItem = document.createElement("button");
//         form.classList.add("todoItem");
//         form.setAttribute("id", "formzilla");
//         form.setAttribute("name", "formzilla");
//         title.setAttribute("name", "title");
//         title.setAttribute("value", `${todo.title}`);
//         description.setAttribute("name", "description");
//         description.setAttribute("value", `${todo.description}`);
//         price.setAttribute("name", "price");
//         price.setAttribute("value", `${todo.price}`);
//         done.innerHTML = `Done<input type="checkbox" onclick="strike()"/>`;
//         deleteItem.textContent = "Delete";
//         deleteItem.setAttribute("onclick", `deleteTodo('${todo._id}')`);
//         form.appendChild(done);
//         form.appendChild(title);
//         form.appendChild(description);
//         form.appendChild(price);
//         form.appendChild(deleteItem);
//         document.getElementById("todoContainer").appendChild(form);

//     });
// }

// function strike () {
//     document.getElementById("fromzilla").classList.toggle("strike");
// }


// document.formzilla.addEventListner("submit", function() {
    
//     axios.put(`https://api.vschool.io/renatedickerson/todo/${puttaroo()}`,  )
// }