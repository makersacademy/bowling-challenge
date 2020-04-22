

$(document).ready(function(){
    let bowling = new Bowling();

    $( document.getElementById("#1-1")).addEventListener("keyup", function(event) {
        bowling.calcPoints(document.getElementById("#1-1"))
    })

  
})

