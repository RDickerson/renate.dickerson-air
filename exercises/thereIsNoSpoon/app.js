var watterBottle = {
    color: "Purple",
    isContainer: true,
    ml: 1000,
    fun: function () {
        console.log ("This is a " + watterBottle.color + " item.");
    }
}

var powerStrip = {
    color: "White",
    isContainer: false,
    outlets: 6,
    fun: function () {
        console.log ("This is a " + powerStrip.color + " item.");
    }
}

var macBookAir = {
    color: "Silver",
    isContainer: true,
    gb: 121,
    fun: function () {
        console.log ("This is a " + macBookAir.color + " item.");
    }
}

var monitor = {
    color: "Black",
    isContainer: false,
    display: "hdmi",
    fun: function () {
        console.log ("This is a " + monitor.color + " item.");
    }
}

var person = {
    name: "Nate",
    title: "instructor",
    tallerThenMe: true,
    daysKnown: 3,
    fun: function () {
        console.log (person.name + " is an " + person.title + ".");
    }
}

var recycleCan = {
    color: "blue",
    isContainer: true,
    putIn: recycleables,
    fun: function () {
        console.log ("This is a " + recycleCan.color + " item.");
    }
}

var piller = {
    color: "White",
    isContainer: false,
    aproxHeightFt: 10,
    fun: function () {
        console.log ("This is a " + piller.color + " item.");
    }
}

var book = {
    color: "Orange",
    isContainer: false,
    pages:244,
    fun: function () {
        console.log ("This is a " + book.color + " item.");
    }
}

var vent = {
    color: "Chrome",
    isContainer: false,
    shape: "round",
    fun: function () {
        console.log ("This is a " + vent.color + " item.");
    }
}

var coffeeCup = {
    color: "White",
    isContainer: true,
    oz: 12,
    fun: function () {
        console.log ("This is a " + watterBottle.color + " item that we are blessed to have.");
    }
}