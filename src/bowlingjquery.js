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

  if (clickCount >= 2){
  checkFrameBefore();
  }

  frameTotalVal();

});

function runningTotal(){
  $("#game_result_val").html(game.total());
}

function frameTotalVal(){
  $("#frameOutcome"+clickCount).html(game.frameSum(clickCount));
}

function checkFrameBefore(){
  if(game.framesTally[clickCount-2][0]===10){
    // $("#frameOutcome"+clickCount-1).html(10+game.framesTally[clickCount-1][0]);
    $("#frameOutcome1").htm(12345);

  }
}
