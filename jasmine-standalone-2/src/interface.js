var game;
$(document).ready(function(){
	newGame()

	$("#Roll1").click(function(){roll(1)});
	$("#Roll2").click(function(){roll(2)});
	$("#Roll3").click(function(){roll(3)});
	$("#Roll4").click(function(){roll(4)});
	$("#Roll5").click(function(){roll(5)});
	$("#Roll6").click(function(){roll(6)});
	$("#Roll7").click(function(){roll(7)});
	$("#Roll8").click(function(){roll(8)});
	$("#Roll9").click(function(){roll(9)});
	$("#Roll10").click(function(){roll(10)});

	$("#newgame").click(function(){newGame()})

});

newGame = function(){
  game = new Game
  newGameHtml()
}

newGameHtml = function(){
  $("#p1score").html(game.score())
  for (i = 1; i <= 10; i++){
	$("#r"+ i +"\\.1").html(" ");
	$("#r"+ i +"\\.2").html(" ");
  }
  $("#r10\\.3").html(" ");
};

roll = function(number){

  var value = game.roll(number)
  console.log("#r" + game.frames.length + "\\." + game.frames.last().rollNumber)
  $("#r" + game.frames.length + "\\." + game.frames.last().rollNumber).html(value)
  $("#p1score").html(game.score())

};