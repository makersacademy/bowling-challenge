$(document).ready(function(){

  bowling = new Bowling();

  $("#1").click(function(){
    bowling.roll(1);
    $("#f1r1").text(bowling.scoreArray[0]);
  });

})