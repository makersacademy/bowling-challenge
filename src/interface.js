$(document).ready(function(){
  createTable();

  var calculator = new ScoreCalculator();
  var game = new Game(calculator);
  var frame = new Frame();
  var cumulativeScore = [];


  $('a').click(function(){
    var value = parseInt($(this).attr('value'));
    frame.addRoll(value);
    var frameNr = game.frameNr();
    var frameThrow = frame.rolls.length;
    var rollNr = "#r"+ (frameNr * 2 + frameThrow - 1);
    $(rollNr).text(value);
    changeFrame();
  })

  function changeFrame(){
    if (frame.rolls.length === frame.maxRolls()){
      game.addFrame(frame);
      addScore();
      // if(game.frameNr() === 10){
      //   gameOver();
      // }
      if(game.frameNr() === 9){
        frame = new Frame('specialFrame')
      } else{
        frame = new Frame();
        }
    }
  }

  function addScore(){
    cumulativeScore = game.score();
    console.log(cumulativeScore)
    var frameID = ""
    var incrementalScore = 0
    for(var i = 0; i<game.frameNr(); i++){
      frameID = "#f" + i + " .score"
      if(isNaN(cumulativeScore[i])){
        incrementalScore = '-'
      } else{
        incrementalScore = cumulativeScore[i]
      }
      $(frameID).text(incrementalScore);
    }
  }

  function gameOver(){
      $('#f10 .score').text(incrementalScore);
  }




  function createTable(){
    var wholeTable = "";
    for(var i=0; i<9; i++){
      wholeTable +="<table id='f" +i+ "'><tr><th colspan='2'>Frame "+(i+1)+"</th></tr><tr><td id='r" + i*2 + "'>--</td><td id='r" + (i*2+1)+ "'>--</td></tr><tr><td class='score' colspan='2'>--</td></tr></table>"
    }
    var frameTen = "<table id='f9'><tr><th colspan='3'>Frame 10</th></tr><tr><td id='r18'>--</td><td id='r19'>--</td><td id='r20'>--</td></tr><tr><td class='score' colspan='3'>--</td></tr></table>"
    $('#scoreboard').html(wholeTable+frameTen);
  };



});
