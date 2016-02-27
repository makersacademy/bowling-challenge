$(document).ready(function(){

  var calculator = new ScoreCalculator();
  var game = new Game(calculator);
  var frame = new Frame();
  var cumulativeScore = [];


  startGame();

  $('#rollValueAvailable').on('click', '.rollValue', function(e){
    e.preventDefault()
    var value = parseInt($(this).attr('value'));
    frame.addRoll(value);
    var rollNr = "#r"+ (game.frameNr() * 2 + frame.nrRollsCompleted() - 1);
    $(rollNr).text(value);
    changeFrame();
  })

  function startGame(){
    createTable();
    createRolls();
  }

  function createRolls(){
    if(game.isOver()){
      $('#rollValueAvailable').empty();
      return ''
    }
    var str =""
    for(var i=0,n=frame.pinsLeft()+1; i<n; i++){
      str += "<a href='#' class='rollValue' value="+ i +">" + i +"</a>  ";
    }
    $('#rollValueAvailable').html(str);

  }

  function changeFrame(){
    if (frame.isOver()){
      game.addFrame(frame);
      addScore();
      nextFrame();
    }
    createRolls();
  }

  function nextFrame(){
    if(game.isOver()){
      gameOver();
      frame = new Frame();
    }else if(game.frameNr() === 9){
      frame = new Frame('specialFrame')
    } else{
      frame = new Frame();
      }
  }

  function addScore(){
    cumulativeScore = game.score();
    var frameID = ""
    var incrementalScore = 0
    for(var i = 0, n=game.frameNr(); i< n ; i++){
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
    $('h3').text('Game over. Final score is: ' + game.finalScore());
    $('#playAgainButton').html("<a href='#' id='playAgain'>Play again?</a>")
  }

  $('#playAgainButton').on('click', '#playAgain', function(e){
    e.preventDefault();
    game.reset();
    $('#scoreboard').children().remove();
    $('h3').empty();
    $('#playAgainButton').empty();
    startGame();
  })




  function createTable(){
    var wholeTable = "";
    for(var i=0; i<9; i++){
      wholeTable +="<table id='f" +i+ "'><tr><th colspan='2'>Frame "+(i+1)+"</th></tr><tr><td id='r" + i*2 + "'>--</td><td id='r" + (i*2+1)+ "'>--</td></tr><tr><td class='score' colspan='2'>--</td></tr></table>"
    }
    var frameTen = "<table id='f9'><tr><th colspan='3'>Frame 10</th></tr><tr><td id='r18'>--</td><td id='r19'>--</td><td id='r20'>--</td></tr><tr><td class='score' colspan='3'>--</td></tr></table>"
    $('#scoreboard').html(wholeTable+frameTen);
  };



});
