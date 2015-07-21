var game = new Bowling();

var framesTally = [];
var playing = true;
var framesNumber = 0;
var bowl1 = "";
var bowl2 = "";

var clickCount = 0;

$("#bowlsform").submit(function(e){
  e.preventDefault();

  console.log(clickCount ++);


  bowl1 = parseInt($("#bowl_1").val());
  bowl2 = parseInt($("#bowl_2").val());

  //Updates the frames for each roll
  $("#frame"+clickCount+"-1").html(bowl1);
  $("#frame"+clickCount+"-2").html(bowl2);

  game.roll(bowl1,bowl2);

  runningTotal();

  frameTotalVal();

});

function runningTotal(){
  $("#game_result_val").html(game.total());
}

function frameTotalVal(){
  if(clickCount === 1){
    $("#frameOutcome"+clickCount).html(game.frameSum(clickCount));
  } else {
    $("#frameOutcome"+clickCount).html(game.frameSum(clickCount));
    $("#frameOutcome"+(clickCount-1)).html(game.secondLastFrameTotal);
    $("#frameOutcome"+(clickCount-2)).html(game.thirdLastFrameTota);
  }
}

$.get("http://api.openweathermap.org/data/2.5/find?q=London&units=metric",function(data){
  $("#weather").html(data.list[0].main.temp);
});
