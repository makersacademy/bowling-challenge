

$(document).ready(function(){
    bowling = new Bowling();

    arr = ["#1-1", "#1-2", "#1-3", "#1-4" ,"#1-5", "#1-6", "#1-7", "#1-8", "#1-9","#1-10","#1-11"]
    elm = 0; 
    prv = 0;
    two = false

    $("#board").keyup(function(event) {
        
       if (two == false && event.keyCode == 13){
             two = true
             prv = parseInt($(arr[elm]).val()) 
             $(arr[elm]).val("");

                if (prv == 10){
                     bowling.calcPoints(10,0)
                     $("#the").text(bowling.player_score); 
                     $(arr[elm]).replaceWith(function() {
                    return '<div>' + bowling.player_score +  '</div>';  
            })
           
            elm++  
            two = false
            return false
           } 
           
           return true;    
       }

       if (two == true && event.keyCode == 13){

            var elmId = parseInt($(arr[elm]).val()) 
            bowling.calcPoints(prv,elmId)
            console.log(bowling.player_score);
            $(arr[elm]).replaceWith(function() {
            return '<div>' + bowling.player_score +  '</div>';
               
            })
          elm++ 
          prv =elmId
          two = false
          $("#the").text(bowling.player_score); 
         
       }
    }) 
})

