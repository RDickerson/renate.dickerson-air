document.getElementById("count").innerHTML = localStorage.count;




var clickDisabled = false;
window.addEventListener("click", function(){
    if (clickDisabled){
        return;
    }else {
        var count = localStorage.count;
        count++;
        localStorage.count = count;
        document.getElementById("count").innerHTML = localStorage.count;
    }
         

      // do your real click processing here

      
      setTimeout(function(){clickDisabled = true;}, 3000);

});

var intervalId = setInterval(function(){
    var time = 'hi';
    console.log(time += 'hello')
    document.getElementById("timer").innerHTML = time--;
 },1000)

clearInterval(intervalId);

// document.getElementById("starting").innerHTML = `localStorage.count`;
