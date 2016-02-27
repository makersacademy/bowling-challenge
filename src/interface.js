$(document).ready(function(){

  var calculator = new ScoreCalculator();
  var game = new Game(calculator);
  var frame = new Frame();
  var cumulativeScore = [];
  var LAST_NORMAL_FRAME = 9;
  var STRIKE = calculator.ALL_PINS_DOWN;


  startGame();

  $('#rollValueAvailable').on('click', '.rollValue', function(e){
    e.preventDefault()
    var value = parseInt($(this).attr('value'));
    frame.addRoll(value);
    var rollNr = "#r"+ (game.frameNr() * 2 + frame.nrRollsCompleted() - 1);
    value = displayType(value);
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
    }else if(game.frameNr() === LAST_NORMAL_FRAME){
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
      this.numberOfPinsDown  = this.numberOfPinsDown === this.START_PINS ? 0 : this.numberOfPinsDown
      incrementalScore = isNaN(cumulativeScore[i]) ? '-' : cumulativeScore[i]
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


  function displayType(value){
    if(value === STRIKE ){
      return 'X';
    }else if(frame.nrRollsCompleted() === 3){
      return displayLastRoll(value)
    }else if(calculator.isSpare(frame.rolls)){
      return '/';
    }else{
      return value;
    }
  }

  function displayLastRoll(value){
    if(calculator.isStrike(frame.rolls) && calculator.isSpare(frame.rolls.slice(1,3))){
      return '/';
    }else if(calculator.isSpare(frame.rolls) && frame.nrRollsCompleted()===3 ){
      return value;
    }
  }

  function createTable(){
    var wholeTable = "";
    for(var i=0; i<LAST_NORMAL_FRAME; i++){
      wholeTable +="<table id='f" +i+ "'><tr><th colspan='2'>Frame "+(i+1)+"</th></tr><tr><td id='r" + i*2 + "'>--</td><td id='r" + (i*2+1)+ "'>--</td></tr><tr><td class='score' colspan='2'>--</td></tr></table>"
    }
    var frameTen = "<table id='f9'><tr><th colspan='3'>Frame 10</th></tr><tr><td id='r18'>--</td><td id='r19'>--</td><td id='r20'>--</td></tr><tr><td class='score' colspan='3'>--</td></tr></table>"
    $('#scoreboard').html(wholeTable+frameTen);
  };

});
