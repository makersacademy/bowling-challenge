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
//
// - receive bowl1 and bowl2
// - update score1 and score2
//
// - receive bowl3 and bowl4
// - update score3 and score4


  bowl1 = parseInt($("#bowl_1").val());
  bowl2 = parseInt($("#bowl_2").val());

  //Updates the frames for each roll
  $("#frame"+clickCount+"-1").html(bowl1);
  $("#frame"+clickCount+"-2").html(bowl2);

  game.roll(bowl1,bowl2);


  //
  // var frame1 = $("#frameresult1").html(game.total());

  // $("#game_result_val").html(frame1);

  runningTotal();

  frameTotalVal();

});

function runningTotal(){
  $("#game_result_val").html(game.total());
}

function frameTotalVal(){
  $("#frameOutcome"+clickCount).html(game.frameSum(clickCount));

}

//
// function output(){
//
//   $("#score"+game.clickCount).html();
//
// }
